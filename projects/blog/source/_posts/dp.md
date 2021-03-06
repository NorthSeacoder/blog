---
title: 动态规划
comment: valine
categories:
    - - 算法
      - 常见算法套路
tags:
    - 91
    - 算法
    - JS
    - 专题
    - dp
    - 动态规划
date: 2021-06-24 08:22:10
---

# 动态规划

## 记忆化递归

-   递归:在函数中调用函数自身的方法,有意义的递归通常会把问题分解成规模缩小的同类子问题
-   记忆化递归:
    -   递归函数不依赖外部变量
    -   递归函数不改变外部变量

## 动态规划

### 最优子结构

-   动态规划常常适用于有重叠子问题和最优子结构性质的问题。
-   如果问题的最优解所包含的子问题的解也是最优的，我们就称该问题具有最优子结构性质（即满足最优化原理）。最优子结构性质为动态规划算法解决问题提供了重要线索。

### 无后效性

即子问题的解一旦确定，就不再改变，不受在这之后、包含它的更大的问题的求解决策影响。

### dp 三要素

-   定义状态
-   临界条件
-   状态转移方程

### dp 基本类型

#### 背包 dp

#### 区间 dp

区间类动态规划是线性动态规划的扩展，它在分阶段地划分问题时，与阶段中元素出现的顺序和由前一阶段的哪些元素合并而来有很大的关系。令状态 f(i,j)f(i,j) 表示将下标位置 ii 到 jj 的所有元素合并能获得的价值的最大值，那么 f(i,j)=\max\{f(i,k)+f(k+1,j)+cost\}f(i,j)=max{f(i,k)+f(k+1,j)+cost}，costcost 为将这两组元素合并起来的代价。  

##### 特点:

合并：即将两个或多个部分进行整合，当然也可以反过来；

特征：能将问题分解为能两两合并的形式；

求解：对整个问题设最优值，枚举合并点，将问题分解为左右两个部分，最后合并两个部分的最优值得到原问题的最优值。

#### 状压 dp
#### 数位 dp
给定一个闭区间 ，让你求这个区间中满足某种条件的数的总数。