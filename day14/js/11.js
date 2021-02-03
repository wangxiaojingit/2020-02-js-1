var a=4;
function b(x,y,a){
  // 私有作用域  
  // x=1 y=2 a=3
  console.log(a);//3
  arguments[2]=10;// a=10
  console.log(a);// 10
}
a=b(1,2,3);// b 这个函数没有返回值，undefined
console.log(a);//undefined