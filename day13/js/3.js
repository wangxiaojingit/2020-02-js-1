/* window 全局作用域
   变量提升：num  fn(函数)---》f1----》f2---》f3---》f4
   代码自上而下执行：
*/
console.log(num);// undefined
var num = 1;// num=1;
console.log(num);//1;
var num = 2;// num=2
console.log(num);//2
fn();// f4() 打印4
function fn(){  // 跳过，因为在变量提升阶段走过
    console.log(1);
}
function fn(){ // 跳过，因为在变量提升阶段走过
    console.log(2);   
}
fn();// f4()  打印4
function fn(){  // 跳过，因为在变量提升阶段走过
    console.log(3);
}
fn=100; // fn=100  给fn 重新赋值
function fn(){ // 跳过，因为在变量提升阶段走过
    console.log(4);   
}
fn();// 100() 报错