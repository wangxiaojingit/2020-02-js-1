// 引用数据类型：对象和函数

// 普通的对象：

var person1={"name":"王涵","age":18,"job":"全栈开发工程师"};
// 数组

var ary=["red","yellow","blue"]
// Math 数学对象
Math.random();// [0-1) 随机数
Math.round(1.5); // 四舍五入
// Date 日期对象
new Date();
// 正则 
var res=/\d/g;
var str="abc12a78a99";

str.replace("a","哈");//"哈bc12a78a99"
str.replace(/a/g,"哈");//"哈bc12哈78哈99"


function fn(){
    
}