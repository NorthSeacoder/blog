---
title: 广度优先搜索
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
    - BFS
date: 2021-06-22 22:04:03
---

# BFS

-   BFS 采用横向搜索的方式，从初始状态一层层展开直到目标状态，在数据结构上通常采用队列结构。

-   由于队列的单调性和二值性，当第一次取出目标状态时就是最少的步数。基于这个特性，BFS 适合求解一些最少操作的题目

## 算法模板

<details>
    <summary>循环+队列实现</summary>

1. 首先将根节点放入队列中。
2. 从队列中取出第一个节点，并检验它是否为目标。
    - 如果找到目标，则结束搜索并回传结果。
    - 否则将它所有尚未检验过的直接子节点加入队列中。
3. 若队列为空，表示整张图都检查过了——亦即图中没有欲搜索的目标。结束搜索并回传“找不到目标”。
4. 重复步骤 2。

```js
const visited = {}
function bfs() {
	let q = new Queue()
	q.push(初始状态)
	while(q.length) {
		let i = q.pop()
		if (visited[i]) continue
		for (i的可抵达状态j) {
			if (j 合法) {
				q.push(j)
			}
		}
	}
	// 找到所有合法解
}
```

</details>
