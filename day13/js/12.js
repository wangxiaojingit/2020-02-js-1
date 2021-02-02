function fn(){
    // 指的是你当前的这个函数
   // console.log(arguments.callee);
   // 获取此函数执行时候的宿主环境，如果fn 在window下执行，得到null,如果在A函数里执行，得到就是A
   console.log(arguments.callee.caller);
}
//fn();



function A(){
    fn();
}

A();