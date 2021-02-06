/* 
 在执行函数的时候，一旦new了一下，
 类（构造函数）：Fn 就变成 （首字母一般会大写）
 实例：f1、f2
 构造函数中通过this添加的属性和属性值，都添加给当前的实例,构造函数中的this指的就是你当前类的实例。
 内置类：Number、String、Boolean、Null、Undefined、Object、Array、Regexp....
 自定义类：一般名字首字母会大写

 在构造函数中，通过this添加的属性和属性值，都是当前实例私有的
*/

function Fn(){
    this.name="li";
    this.age=18;
    this.job=function(){}
   
}
Fn.prototype.write=function(){

}
function Fn2(){

}
var f1=new Fn();
var f2=new Fn();
f1.job==f2.job;
f1.name==f2.name;


