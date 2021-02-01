/* 
 window 全局作用域：
 变量提升：
    var fn
    function sum 声明和定义一起完成 
 代码自上而下执行：

*/

sum();// 输出2
fn();// undefined()  报错 fn is not a function
var fn=function(){
    console.log(1);
};

function sum(){
    console.log(2);
}

fn();
sum()