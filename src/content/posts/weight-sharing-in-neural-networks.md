---
title: নিউরাল নেটওয়ার্কে ওয়েট শেয়ারিং কি (What is weight sharing in Neural Networks)?
pubDatetime: 2024-01-01T00:00:00+06:00
description: "A short Bengali-language stub introducing weight sharing in neural networks and its use in reducing parameter counts in large models."
categories: ["ml"]
tags: ["NLP", "CV"]
language: "bn"
draft: true
---

ডিপ নিউরাল নেটওয়ার্কের যুগে প্রবেশ করার পর থেকেই সময়ের সাথে সাথে আমাদের নেটওয়ার্কের গভীরতা যেন বেড়েই চলেছে। সাম্প্রতিক সময়ে Large Language Models বা LLM গুলো যেন তার উৎকৃষ্ট উদাহরণ। এসময়ে আমরা প্রায় ৪৫০ বিলিয়ন ওয়েটস বা প্যারামিটারের মডেলও দেখেছি। এই মডেলগুলোতে প্যারামিটার সংখ্যা কিছুটা কমানোর জন্যে বা অন্যান্য কিছু উদ্দেশ্যে আমরা প্রায়ই ওয়েট শেয়ারিং (weight sharing) এর ধারণাটি ব্যাবহার করে থাকি।

