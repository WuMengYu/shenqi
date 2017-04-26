import React from 'react';
import ReactDOM from 'react-dom';

let age = 243546
let msg = 'JKHKJFS'
let dom = <div>
    safsdf
    <p>kkdvkfd</p>
</div>

// let hello = <p>hello world</p>;
let hello = <div>
  <label htmlFor='name'>姓名</label>
  <input value='aaa' />
  <br />
  <p className={age}>{age}</p>
  <h1>aaa{msg.toLowerCase()}aaa</h1>
  {dom}
</div>
ReactDOM.render(hello,document.getElementById('root'))//render有三个参数，渲染成一个东西hello
// ReactDOM.render(hello,document.querySelector('.root'))//querySelector=$
//JSX语法
//JSX语法需要babel进行编译，转为这个方法React.createElement();
//相邻的JSX元素必须包裹在一个闭合标签内,一般选择div
//每个标签必须闭合
//class => className for => htmlFor;
//标签区分大小写
//在JSX语法中可以嵌入变量或者求值表达式，可以写JS语法,用一对大括号包裹即可，不可以写js语句
//msg.toLowerCase 英文小写变大写

 // let Hello = React.createClass({
 //   render:function(){
 //     return (
 //       <div>
 //        <h1>我是第一种组件的创建方式，即将废弃</h1>
 //       </div>
 //     )
 //   }
 // })
// ReactDOM.render(<Hello></Hello>,document.getElementById('root'))

 function Hello(){
   return(
     <h1>我是第二种组件的创建方式，必须有返回值，而且返回值必须是JSX elements</h1>
   )
 }
ReactDOM.render(<Hello />,document.getElementById('root'))
//React 组件 3种 当做自定义标签去用，首字母必须大写，区分原生标签还是组件
//1. React.createClass()
//2. function()
