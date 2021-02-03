/* 
 1)在全局作用域下this指的就是window
 2)函数执行的时候，看它前面有没有点，如果有点，前面是谁，函数里面的this就是谁，如果没有，在非严格模式下就是window，在严格模式下就是undefined
 3)给元素绑定事件，当触发此事件，函数里面的this就是你绑定元素
 4)在自执行函数中，非严格模式下，this指的就是window，严格模式下是undefined
 5）在回调函数中,(把一个函数当成参数传递给函数)this指的就是window
 7）构造函数中的this指的就是当前类的实例
 8）this还可以通过 call 、bind、apply去更改指向
*/
//"use strict";

//console.log(this);

// var name="dav";
// var obj={
//     name:"li",
//     fn:fn
// }
// function fn(){
//     // this obj
//   console.log(this.name);
// }

// fn();
// obj.fn();

// (function(){
//     console.log(this);
// })();

setTimeout(function(){
    console.log(this);
},100);