/* 
 函数：封装一个功能性的代码
 函数在存储的时候，存的是死字符串

 +形参：形式上的参数
 +实参：在函数执行的时候，真实传入的参数，
 +arguments:在函数里面通过深入arguments，就能得到真实传参的集合，传了多少个参数：

接收参数的另种形式？：
+ 形参
+ arguments

函数在执行的时候形成一个私有作用域，保护里面的私有变量不受全局的干扰
*/
function fn(name,age){
    // 真实传参的个数
  console.log(arguments.length);
   //   获取对应的实参
  console.log(arguments[0])
  console.log(arguments[1])
}

//fn("lili",10);


var res=100;

function fn1(){
    // 变量是私有的
    var res=2;
    console.log(res);
}

fn1();

console.log(res);

// 函数里面如果没有写return，函数执行的结果就是undefined
// 函数执行形成私有作用域，里面的变量在外面访问不到，如果想要访问到，可以通过return
function fn2(){
    // var res=3;
    // return res;
}

var res2=fn2();
