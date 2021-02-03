/* 
window:
变量提升：
    var a===》9===》0==>1==>0==>1==>2
    function fn
    var f  ===》b
*/
var a=9;
function fn(){
    
  a=0;// 全局的a//
  return function(b){
     // 形参赋值：b=5 
     return b+a++;// 5+0=5//5+0=5// 5+1=6
  }
}
var f=fn();
console.log(f(5));//5
console.log(fn()(5));//5
console.log(f(5));//6
console.log(a);//2