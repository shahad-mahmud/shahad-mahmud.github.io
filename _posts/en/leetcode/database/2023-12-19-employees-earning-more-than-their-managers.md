---
title: "181 - Employees Earning More Than Their Managers"
categories: problem-solving leetcode database
tags: sql join self-join
---

## The problem

This is a database related problem from Leetcode. You can find the problem [here](https://leetcode.com/problems/employees-earning-more-than-their-managers/){:target="_blank"}. I have used **self join** to solve this problem.

### Description

Table: Employee

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.
```

Write a solution to find the employees who earn more than their managers.

Return the result table in any order.

The result format is in the following example.

### SQL Schema

```sql
Create table If Not Exists Employee (id int, name varchar(255), salary int, managerId int)
Truncate table Employee
insert into Employee (id, name, salary, managerId) values ('1', 'Joe', '70000', '3')
insert into Employee (id, name, salary, managerId) values ('2', 'Henry', '80000', '4')
insert into Employee (id, name, salary, managerId) values ('3', 'Sam', '60000', 'None')
insert into Employee (id, name, salary, managerId) values ('4', 'Max', '90000', 'None')
```

### Examples

```txt
Input: 
Employee table:
+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
Output: 
+----------+
| Employee |
+----------+
| Joe      |
+----------+
Explanation: Joe is the only employee who earns more than his manager.
```

## Solving

This is a simple problem that can be solved using a self join query.

```sql
SELECT e1.name AS Employee
FROM Employee e1, Employee e2
WHERE e1.managerId=e2.id and e1.salary > e2.salary;
```