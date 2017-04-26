// 4-25
// var a = 5;
// {
//   let a = 5;
// }
// let a = 6;

// const a = 6;
// a = 8;//不能改

// const a = {
//   name:'wu'
// }
// a = 6;

// let [a,b,c] = [1,2,3]
// console.log(a,b,c)

// let [a,b,,c] = [1,2,3,4,5]
// console.log(a,b,c)

// let [a,b,c,d] = [2,'aaa','name:wu',function(){}]
// console.log(a,b,c,d)//数组的解构赋值

// function aa(){
//   return [1,2,3]
// }
// let [a,b,c] = aa()
// console.log(a,b,c)

// var {foo,bar} = {foo:"aaa",bar:"bbb"};
// console.log(foo,bar)//对象的解构赋值

// const [a,b,c,d,e] = 'hello'
// console.log(a+b+c+d+e)//字符串的解构赋值

// let name = 'wu';
// let age = 18;
// let say = function(){
//   console.log('say')
// }
// let obj = {
//   name,
//   age,
//   say,
//   run(){
//     console.log('run');
//   }
// }
// console.log(obj)

//箭头函数
// let a = (num) =>num*2;//只有一个参数时，可以省略小括号
//   //  函数名：a   参数：()  函数体：num*2 默认返回
// console.log(a(5))

// let a = (num,num1) =>{
//   num = num++
//   num1 = num1++
//   return num+num1
// }//执行多条语句时
// console.log(a(5,8))

// let a = (num,num1) =>({name:'wu'})//返回对象
// console.log(a(1,3))

// setTimeout(() => console.log(55),500)

// var name = '吴梦雨';
// var age = 18;
// var str = `<p class='active'>姓名是${name}年龄是${age}</p>`;//解决单双引号问题，用反引号
// document.body.innerHTML = str;

// function sum(num=3){//可以给一个默认值
//   return ++num
// }
// console.log(sum(8))

// function sum({name}){//
//   console.log(name)
// }
// console.log(sum({name:'wu'}))


// [0,1,2,3,4].reduce(function(acc,cur,index){
//     console.log(acc,cur,index);
//     //1 2
//     //2 3
//     //3 4
//     //4 5
//     return acc+cur;
//   }
// )

// let arr =[12,882,35,123]
// let max = arr.reduce(
//   function(acc,cur){
//   //比较最大数并返回
//   //12 882
//   //882 35
//   //882 123
//   let max = acc>cur ? acc :cur
//   return max
// })
// console.log(max)

// let arr = [1,2,3]
// let arr1 = [...arr,4,5]
// console.log(arr1)
// console.log(...arr)//数组拼接

// let obj = {a:{b:1}};
// let {...x} = obj;
// console.log(x)

// import { str as ccc,obj } from './test';//导入
// console.log(ccc,obj)
// import test from './test';
// console.log(test)

// var filtered = [12,5,8,130,44].filter(function(value,index,){
//     return value >=10;
// });//filtered is [12,130,44]
// console.log(filtered)

// let numbers = [2,4,23,41]
// let roots = numbers.map(function(item,index,array){
//   return `<p>${item}</p>`
// })
// console.log(numbers,roots)//map()方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数。

// let arr = [1,5,8,45]
// arr.forEach(item =>{console.log(item)})
// for(var i = 0;i<arr.length;i++){
//   console.log(arr[i]);
// }

// let arr = [
//   {name:'wu',age:18},
//   {name:'wu',age:15},
//   {name:'wu',age:16}
// ]
// let index = arr.findIndex( item => item.age === 18)
// console.log(index)

// 4-26
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;//this指向实例化对象
  }//私有属性

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }//原型方法,方法之间不能有逗号
}

class Point2 extends Point{//Point2继承Point
    constructor(x,y){
      super()//子类必须要加super，才能定义私有属性
      this.x = x;
      this.y = y;
    }
    say(){
      console.log('point2 say')
    }
}
var p = new Point2();//p是实例化对象
console.log(p);
p.toString()
p.say()
