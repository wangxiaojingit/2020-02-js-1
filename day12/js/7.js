/* 
  栈内存：
  + 提供一个供js代码执行的环境
  + 存基本数据类型的值
  堆内存：
  + 存引用数据类型的值：
    - 对象：存的是键值对
    - 函数：把函数里面的代码当成字符串存
*/

function fn(){
    console.log(1)
};

fn();