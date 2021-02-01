
/* 
 当fn这个函数执行的时候，开辟一个栈内存形成一个私有作用域，保护里面的私有变量不受外界不干扰
 如果说想要在外界拿到私有作用域中的变量：通过return
 函数里面的私有变量有两种形式：
 + 在函数里面声明过的变量
 + 形参

 ## 作用域链
 在私有作用域中，查询某个变量，先看自己私有的有没有:
 + 如果有，就是私有的
 + 如果没有，它会向上一级作用域去“查找”，如果都没有，一直找到window作用域为止，
   如果说window也没有，会报错： Uncaught ReferenceError: a is not defined
   如果是赋值的话，也会沿着作用域去找，直到找到window为止，如果window也没有，那就相当于给window添加了一个这样的属性名和属性值

*/
//var a=100;
function A(){
    //var a=200;
   return function fn(x,y){
        //var a=3;
         a=300;
    }
}
A()();
console.log(a);




