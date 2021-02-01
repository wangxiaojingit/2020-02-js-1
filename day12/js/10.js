

/* 
 变量提升的特殊性：
 1） 在判断条件中，不管条件是否成立，都会进行变量提升

 变量提升： var a
 代码自上而下执行：

*/
console.log(a); // undefined
if(1==2){
  var a=12;
}
console.log(a);// undefined



/* 判断语句中：
在以前function 在变量提升的时候 声明和定义一起完成，
现在在新版本浏览器中，在变量提升的时候，只声明不定义 

window 全局作用域：
变量提升：function fn  只声明了一下（相当于和var 是一样了）
代码自上而下执行：
*/


console.log(fn);// 有此变量，但是没值 undefined
if(1==2){
   function fn(){
       console.log(1)
   }
}
console.log(fn);// undefined