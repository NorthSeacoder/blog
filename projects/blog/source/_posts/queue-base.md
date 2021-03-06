---
title: q队列
comment: valine
categories:
  - - 算法
    - 基本数据结构
tags:
  - 91
  - 算法
  - JS
  - 基础
  - 队列
  - 数组
date: 2021-05-14 09:18:22
---
# 队列

## 代码实现

-   用数组实现一个顺序队列
-   用链表实现一个链式队列
-   实现一个循环队列

## 什么是队列？

-   先进者先出，这就是典型的“队列”结构。
-   支持两个操作：入队 enqueue()，放一个数据到队尾；出队 dequeue()，从队头取一个元素。
-   所以，和栈一样，队列也是一种操作受限的线性表。

## 如何实现队列

-   队列 API

```js
class Queue{
    enqueue(){}//入队
    dequeue(){}//出队
    size()//队列大小
}
```

-   数组实现（顺序队列）
-   链表实现（链式队列)
-   循环队列（基于数组)

## 队列有哪些常见的应用