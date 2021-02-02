
// 自执行函数在当前作用域不进行变量提升，在window全局作用域下，变量提升：a f2

var a=100;

function f2(){
    console.log("f2");
 }
 
  
 
 (function (){
     // 在这里会形成一个私有作用域,照常进行变量提升
    console.log(a);// undefined
    var a=3;
 })();