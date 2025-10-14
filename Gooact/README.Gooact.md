## Origin
from https://medium.com/@sweetpalma/gooact-react-in-160-lines-of-javascript-44e0742ad60f

## Subject

Implement React in 160 lines of JavaScript.

## Notes

#### Steps

1. from JSX to VDOM
2. form VDOM to DOM
3. fix (the importance of key property and use VDOM to fix current DOM)
4. Component

#### 一些注释
**对于Step>2**

在React中， 渲染流程可以概括为：
```shell
JSX -> createElement() -> Virtual DOM -> render() -> Real DOM
```

> 具体过程：
> 1. JSX：语法糖，`<div>Hello</div>` 被 Babel 转换成 React.createElement('div', null, 'Hello')
> 2. createElement()：生成一个 JavaScript 对象（虚拟 DOM）
> 3. render()：
> 	- 递归遍历虚拟 DOM
> 	- 创建真实 DOM 元素
> 	- 设置属性
> 	- 处理事件
> 	- 插入到页面

