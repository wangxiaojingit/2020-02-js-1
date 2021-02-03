/* window全局作用域：
var foo===》“hello"

*/




var foo="hello";
(function(foo){
  // 私有作用域：
  //  形参赋值 foo= "hello"
  //  变量提升：
  console.log(foo);//"hello"
  var foo=foo||"word";// foo="hello"||"word"; foo="hello"
  console.log(foo);// "hello"
})(foo);
console.log(foo);//"hello"

/* 
var a=1||2; 当第一个值是true,那a就是第一个值，如果第一个值为false就是第二个值
var a=1&&2; 当第一个值为true，那a就是第二个值，如果第一个值为false，就是第一个值
*/