/* 
带var 和不带var：
 在全局作用域下都是给window添加属性名和属性值，区别：
 + 带var 有变量提升，不带var 没变量提升
 + 带var 是不可配置的，你通过delete window.a 删除不掉，没带var 是可配置的，可以删除掉
*/

var a=3;
b=4;

"a" in window;//true
"b" in window;//true
window.b;//4
delete window.a;//false
delete window.b;true
"b" in window;false
"a" in window;true