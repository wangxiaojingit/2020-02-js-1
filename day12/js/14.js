/* 
window 全局作用域：
变量提升：var num  function fn
代码自上而下执行：

*/


console.log(num);// undefined
console.log(fn);// undefined
     if([]){
         // 条件成立 fn: function fn(){console.log("a")}
         fn();// "a"
         var num=100;//num=100
         function fn(){console.log("a")}
     }
console.log(fn);// function fn(){console.log("a")};