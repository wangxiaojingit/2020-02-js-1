/* 
当一个函数执行的时候，形成了不销毁的作用域就是闭包,
作用：
+ 保护里面的私有变量不受外界干扰，（不污染全局变量）
+ 保存

*/
var a=10;
function fn(){
    var a=3;
    return function(){

    }
}

var res=fn();