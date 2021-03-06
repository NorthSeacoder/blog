---
title: 深度优先搜索
comment: valine
categories:
    - - 算法
      - 常见算法套路
tags:
    - 91
    - 算法
    - JS
    - 专题
    - 搜索
    - 图
    - 树
    - dfs
date: 2021-05-14 08:47:47
---

# DFS

-   搜索中的 DFS 一般用递归函数实现暴力枚举(也可以用栈来实现)
-   需要记录已访问的节点以防止重复访问(图),树不需要

## 算法模板

<details>
    <summary>递归实现</summary>

```js
const visited = {}
function dfs(i) {
	if (满足特定条件）{
		// 返回结果 or 退出搜索空间
	}

	visited[i] = true // 将当前状态标为已搜索
	for (根据i能到达的下个状态j) {
		if (!visited[j]) { // 如果状态j没有被搜索过
			dfs(j)
		}
	}
}
```

</details>

<details>
    <summary>循环+栈实现</summary>

1. 首先将根节点放入 stack 中。
2. 从 stack 中取出第一个节点，并检验它是否为目标。如果找到目标，则结束搜寻并回传结果。否则将它某一个尚未检验过的直接子节点加入 stack 中。
3. 重复步骤 2。
4. 如果不存在未检测过的直接子节点。将上一级节点加入 stack 中。
5. 重复步骤 2。
6. 重复步骤 4。
7. 若 stack 为空，表示整张图都检查过了——亦即图中没有欲搜寻的目标。结束搜寻并回传“找不到目标”。

```js

```

</details>

## 常用技巧

### 前序遍历与后序遍历

### 双向搜索

### 迭代加深
