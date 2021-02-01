
/* 
 当fn这个函数执行的时候，开辟一个栈内存形成一个私有作用域，保护里面的私有变量不受外界不干扰
 如果说想要在外界拿到私有作用域中的变量：通过return
 函数里面的私有变量有两种形式：
 + 在函数里面声明过的变量
 + 形参

*/
function fn(x,y){
    var a=3;
    console.log(a);
    return a
}


var res=fn();
console.log(res);