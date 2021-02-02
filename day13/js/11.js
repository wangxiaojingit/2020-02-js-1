/* 
 变量提升：
 var a =2
 function fn
 function sum
 上级作用域是谁，跟此函数在哪执行没关系，只给它在哪定义有关
*/
var a=2;
function fn(){
    // fn执行形成一个私有作用域，
    // a 不是私有的，向上级作用域找，fn的私有作用域的上级作用域是谁呢？看你的fn在哪定义的，上级作用域就是谁，fn这个函数在window全局作用域定义的，上级作用域就是window
   console.log(a);//2
}
fn();//

// sum 执行会形成一个私有作用域
function sum(){
  // 变量提升 var a
  var a=3; // a=3
  fn();
}

sum();