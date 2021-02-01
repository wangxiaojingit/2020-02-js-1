// 基本数据类型和引用数据类型的区别？基本数据类型是按值操作，引用数据类型是按空间地址（引用地址）操作
/* 堆内存、栈内存
   栈内存的作用:1、供js执行的环境
               2、给基本数据类型存值
   堆内存作用:  存引用数据类型，对于对象来说，存的就是键值对，对于函数来说，存的就是字符串          

*/

var a=12;
var b=a;
console.log(b);
var obj1={"name":"lili","age":12};
var obj2=obj1;
obj2.age=18;
console.log(obj1.age);