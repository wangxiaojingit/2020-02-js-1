/* 
window 全局作用域：
变量提升阶段： function fn （在新版本浏览器中只声明不定义）
代码自上而下执行：

*/

console.log(fn); // undefined
if(1==1){
    // if判断的第二个特殊性： 一旦这个条件成立，对于function来说，立马进行赋值
   console.log(fn); // fn 这个函数
   function fn(){
       console.log("ok");
   }
}
console.log(fn)  // fn