var a=10,b=11,c=12;
function text(a){
  // 私有作用域
  // a=10  var b
  a=1;
  var b=2;
  c=3;// 把window 下的c进行改值
  
}
text(10);
console.log(a);//10
console.log(b);//11
console.log(c);//3
