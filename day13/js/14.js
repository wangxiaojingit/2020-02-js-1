/* 
 堆内存的释放
*/
var obj={};
var obj2=obj;
obj2=null;
obj=null;
/* 
 1、栈内存的释放问题：
全局作用域：当你把浏览器的窗口关闭，整个作用域就销毁了

 2、一般情况下，函数执行完毕之后，只要不被占用的，在浏览器空闲的时候，销毁了

*/

/* 
3、不销毁的作用域：当函数执行的时候，里面有一个引用数据类型的值被外界占用了，就形成了不销毁的作用域

*/


 function fn(){
    var num=2;
    return function(){
       console.log(num);
    };
};
var f=fn();


var ary=[];
function fn(){
    var num=2;
    // 虽然说没有return，但是此函数被外界ary占用了，也形成了不销毁的作用域
    ary=function(){
       console.log(num);
    };
};
var f=fn(); // f=undefined


/* 
  4 不立即销毁

*/

function fn(x){
    return function(y){
          return x+y;
    }
}

fn(1)(2);