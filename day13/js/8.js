/* 
es6 语法：
1、没有变量提升
2、阻断了与window的关系
3、变量不能重名
4、暂时性死区
*/


//console.log(a); // a is not defined

//Identifier 'a' has already been declared
// let a=3;
// function a(){
//     console.log(1);
// }

// var b=3;
// function b(){

// }


//console.log(typeof a);// undefined

// console.log(typeof a);
// let a=3;

// 虽然es6没有变量提升，但是在代码执行之前，会有一个词法检测，直接就会爆错

let a=3;
console.log(a);// 还没走这行
function a(){

}