/*
window 全局作用域：
 变量提升:
 var a =12
 var b =13
 var c =14  ====》20
 function fn
 代码自上而下执行：

 fn(a);执行的时候会形成一个私有作用域
   1、形参赋值：a= 12; a是私有变量 ====》20
   2、变量提升：
      var b;// b是私有变量====》20
   3、代码自上而下执行：   
*/

var a=12,b=13,c=14;
function fn(a){
   console.log(a,b,c); //12 undefined 14 c不是私有，向上级作用域进行查找，window下的 c 14
   var b=c=a=20;// c 是全局下的，更改的是全局的
   console.log(a,b,c);// 20 20 20
}
fn(a);
console.log(a,b,c);// 12 13 20