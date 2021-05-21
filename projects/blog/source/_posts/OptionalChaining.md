---
title: OptionalChaining
date: 2021-04-07 14:55:42
comment: 'valine'
categories:
- [基础, JS]
tags:
- V8
- JS
- 我不知道的 JS
---
# 可选链操作符
可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。
# 用法
## 
```js
obj?.prop

```
## 
```js
obj?.[expr]
```
## 
```js
arr?.[index]
```
## 
```js
func?.(args)
```