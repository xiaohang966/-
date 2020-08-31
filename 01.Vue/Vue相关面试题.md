# Vue面试题整理

> 相当于复习Vue的相关的知识





# Vue的两个核心是什么

- 数据驱动和组件化开发



# vue生命周期钩子函数有哪些？

- beforeCreate
  - 创建前
  - 没有DOM，没有el 对象
  - 使用路由守卫，来判断是否登录

- created
  - 创建后
  - 没有DOM，但是有el对象了
  - 发送请求



- beforeMount: 

  - 载入前

  - 有DOM，有了el对象，此时开始渲染DOM了，但是还没渲染

- mounted:

  - 载入后
  - DOM，el，对象都有了，dom已经被渲染
  - 操作页面的DOM元素



- beforeUpdate
  - 更新前
  - 进一步地更改状态，这不会触发附加的重渲染过程
- updated
  - 更新后



- beforeDestroy
  - 销毁前
  - 实例销毁之前调用
- destroyed 
  - 销毁后
  - 可以执行一些优化操作,清空定时器，解除绑定事件





# 什么是MVVM

- M（数据层） V（视图层） VM（view-model）视图模型层）用来连接（数据层）（视图层）





# watch和computed和data的区别







# scss和less的使用

- scss 最新版都有错误，使用需要安装指定版

```js
# scss安装
npm install node-sass scss-loder@7.3.0

# less 安装
npm install less-loder
```









# 深入响应式原理

> 有空看看