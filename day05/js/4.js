/* 
6) slice(n,m)
    作用：从索引n开始(包含n)到索引m结束（不包含m）
    参数：
    返回值：复制的新数组
    是否改变原数组：不改变

*/

var ary=[0,1,2,3];
var res=ary.slice(0,2);
console.log(ary);//[ 0, 1, 2, 3 ]
console.log(res);//[ 0, 1 ]

// 复制整个数组
ary.slice(0);
ary.slice();

/* 
7) concat
    作用：拼接数组
    参数：具体的某项、数组
    返回值：拼接后的新数组
    是否改变原数组：不改变

*/

var ary=[1,2,3];
var ary2=[6,7]
var res=ary.concat(4,5,ary2);//[ 1, 2, 3, 4, 5, 6, 7 ]
console.log(ary,res);

/* 
8) toString
    作用：把数组转为字符串
    参数：无
    返回值：字符串
    是否改变原数组：不改变

*/
var ary=[1,2,3];
var res=ary.toString();
console.log(ary,res);

/* 
9) join
    作用：按照指定的连接符，把数组中的每一项连接在一起
    参数：连接符
    返回值：字符串
    是否改变原数组：不改变

*/

var ary=[1,2,3];
var res=ary.join("+");
console.log(res);"1+2+3";
// 求和
var res2=eval(ary.join("+"));

/* 
10) reverse
    作用：倒序
    参数：无
    返回值：倒序之后的数组
    是否改变原数组：改变

*/

var ary=[1,2,3];
var res=ary.reverse();

console.log(ary,res);//[3,2,1]

/* 
11) sort
    作用：排序
    参数：
    + 无：排十以内的不会受影响
    + 函数，函数有一个返回值，return a-b;代表升序，如果是return b-a;代表的就是降序
    返回值：排序之后的数组
    是否改变原数组：改变

*/

var ary=[1,6,3,2,9,11];
//var res=ary.sort();// [1, 2, 3, 6, 9]

ary.sort(function(a,b){
    return b-a;
})

/* 
12) indexOf/lastIndexOf
    作用：检索某项在数组中首次出现(最后出现)的位置（索引），如果说没此项，那返回值就是-1
    参数：indexOf（x,n）
    + x：检索的那项
    + n:从n这个索引开始检索x项/(到索引n位置停止检索)
    是否改变原数组：不改变

*/

var ary=[1,2,2,1,1,3];

var res=ary.indexOf(1);//0
var res2=ary.indexOf(5);//-1

/* 
13) includes
    作用：判断是否包含某项,返回值是true或者是false，如果是true代表包含，如果是false 不包含
    参数：判断的项
   
    是否改变原数组：不改变

*/

var ary=[1,2,3,4];
var res=ary.includes(2);// true
var res=ary.includes(8);// false

/* 
14) forEach
    作用：遍历数组中的每一项
    参数：函数，函数里面有两个形参：item index
         + item 代表数组中的每一项
         + index 代表的数组中的每项的索引
    返回值：     
    是否改变原数组：不改变

*/
var ary=[5,6,7];
var res=ary.forEach(function(item,index){
   // console.log(item)
    console.log(index);
});
console.log(ary);

/* 
15) map
    作用：把数组中的每一项映射成别的内容
    参数：函数，函数里面有两个形参：item index
         + item 代表数组中的每一项
         + index 代表的数组中的每项的索引
    返回值：  映射之后的新数组   
    是否改变原数组：不改变

*/

var ary=[1,2,3];
var res=ary.map(function(item,index){
    return item+2;
});

console.log(ary,res);

