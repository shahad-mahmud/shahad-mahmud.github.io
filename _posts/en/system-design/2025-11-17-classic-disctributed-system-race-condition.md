---
title: "Solving a Real-Time Race Condition: A Classic Distributed System's Challenge"
categories: system-design
tags:
    - System Design
    - Distributed System
    - Race Condition
---

A couple of days ago, my colleague [Arnab Saha](https://www.linkedin.com/in/arnab-saha-0942611a9/) and I were working on a feature spanning three microservices: a **Frontend** (TypeScript), a **Backend** (TypeScript), and an **AI service** (Python).

The feature involved tasks that could run anywhere from 10 seconds to 15 minutes or more. Naturally, at the AI service's end, we decided to use **Celery** to handle these long-running, asynchronous jobs.

Our initial flow was straightforward:

1. A user creates a task from the frontend.
2. The request is sent to the backend, which does some necessary validation, pre-processing, etc.
3. Finally, the backend passes the task to the AI microservice where we process it with a Celery worker.

Over the time we faced some interesting problems and solved those in some well thought ways. Give a quick glimpse at our system architecture and keep reading to learn more.

![final system architecture](https://myhuvzumtdjhrczfdlxb.supabase.co/storage/v1/object/public/personal-site/assets/blogs/system-design/distributed-race-condition.png "Final system architecture")

## Real-Time Streaming vs. Stateless Workers

We needed to stream the updates (message chunks) to the user in a real-time, in a chat-like interface, and *also* retain that data in our database.

So, we started by pushing the message stream events from the AI service into **RabbitMQ**. On the other side, we had multiple backend workers listening to this queue. A worker would pick up a chunk and push it to the DB. The standard **Competing Consumers** pattern.

Here's where things got interesting.

Our workers are **stateless** and **independent**. They have no shared state, so they don't know what the previous chunk was. This makes assembling the message in the correct order impossible. 

To solve this, we pivoted: instead of sending small independent chunks (like "Hello", " world", "\!"), we started sending the *full, concatenated message* every time ("Hello", "Hello world", "Hello world\!") from the AI service.

![Concat and Pass](https://myhuvzumtdjhrczfdlxb.supabase.co/storage/v1/object/public/personal-site/assets/blogs/system-design/concat-and-pass.png "Concat and Pass")

### A Classic Race Condition

This seemed great, but it introduced a new, even scarier problem. A slow worker might overwrite a fast worker’s latest message with an outdated or old message. The *classic distributed system race condition*!

For instance:

* **Worker A (Fast)** gets `chunk_order: 5` ("Hello world\!") and writes it to the DB.
* **Worker B (Slow)**, delayed by the network or an event loop tick, finally processes `chunk_order: 3` ("Hello wo") and writes it to the DB... *after* Worker A.

The database row would now incorrectly show "Hello wo". A slow worker could overwrite a fast worker's newer message with an outdated one.

### Our Solution: The Conditional UPSERT

To solve this, we came up with a simple, yet (we think) clever solution: using a **conditional `UPSERT`**.

Each streamed message already had its own `chunk_order` and `timestamp` metadata. We created a unique constraint on the `task_id` column in our database. Now, instead of updating blindly, our workers use an `UPSERT` operation (in Postgres, this is `INSERT ... ON CONFLICT ... DO UPDATE`) with a critical `WHERE` clause:

```sql
-- This is a conceptual example of the UPSERT logic
INSERT INTO tasks (task_id, content, chunk_order)
VALUES ($1, $2, $3)
ON CONFLICT (task_id)
DO UPDATE SET
  content = EXCLUDED.content,
  chunk_order = EXCLUDED.chunk_order
WHERE
  EXCLUDED.chunk_order > tasks.chunk_order;
```

This conditional check is the magic. It's an **atomic operation** handled *by the database*.

If the fast worker's `chunk_order: 5` arrives, the `WHERE` clause passes, and it writes. When the slow worker's `chunk_order: 3` arrives, the `WHERE 3 > 5` condition fails, and the database simply discards the update. No harm done.

This ensures we *always* have the latest data in the DB and makes our entire write operation **idempotent**.

### The Final Piece and the Trade-Off

The final piece was easy: we use **Supabase Realtime** to listen for `UPDATE` events on that database row and stream the `content` field to the user.

While this solves the consistency problem, it does come with a trade-off: data transfer. To send a 100-chunk message, we are transmitting the first chunk, then the first two, then the first three, and so on. This is an **O(n²) complexity** in data transfer.

However, considering the relatively small size of our chat messages, this was a trade-off we were happy to make. The simplicity and robustness of the solution far outweighed the cost of the extra bandwidth.