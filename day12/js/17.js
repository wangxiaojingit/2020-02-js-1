/* 
 变量提升：
 var obj
 代码自上而下执行：

*/

console.log(obj.f1);// 报错：  Cannot read property 'f1' of undefined
var obj={
    f1:function(){
       console.log(1)
    }
}