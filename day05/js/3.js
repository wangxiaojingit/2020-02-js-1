/* 
 数组常用的方法：

 作用：向数组末尾追加某一项
 参数：添加的具体项，可以是一项,也可以是多项
 返回值：新数组的长度
 是否改变原数组：改变

*/


/* 
    1) push
    作用：往数组末尾追加项
    参数：具体要追加的某项
    返回值：新数组的长度
    是否改变原数组：改变

*/
var ary=[1,2,3];
var res=ary.push(6);
console.log(ary); //[1,2,3,6]
console.log(res);

/* 
2) unshift
    作用：往数组开头追加项
    参数：具体要追加的某项
    返回值：新数组的长度
    是否改变原数组：改变

*/

var ary=[1,2,3];
var res=ary.unshift(6);
console.log(ary); //[ 6, 1, 2, 3 ]
console.log(res);


/* 
3) pop
    作用：删除数组的最后一项
    参数：无
    返回值：删除的最后一项
    是否改变原数组：改变

*/

var ary=[1,2,3,4];
var res=ary.pop();
console.log(ary);//[ 1, 2, 3 ]
console.log(res);


/* 
4) shift
    作用：删除数组的第一项
    参数：无
    返回值：删除的项
    是否改变原数组：改变

*/

var ary=[1,2,3,4];
var res=ary.shift(); 
console.log(ary);//[ 2, 3, 4 ]
console.log(res);//1 

/* 
5) splice(n,m,x1,x2)
    作用：从索引n开始(包含n)删除m项，并且用x1、x2进行替换
    参数：
    返回值：一个数组，并且放的是删除的项
    是否改变原数组：改变

*/

var ary=[0,1,2,3];
var res=ary.splice(0,2,5,6,7);
console.log(ary);//[ 5, 6, 7, 2, 3 ]
console.log(res);//[ 0, 1 ]
console.log(res[0]);
console.log(res[1]);


/* 
  往数组的开头新增一项

*/

var ary=[0,1,2,3];

var res=ary.splice(0,0,6);
console.log(ary);//[ 6, 0, 1, 2, 3 ]
console.log(res);//[]


/* 
  往数组的末尾追加

*/

var ary=[0,1,2,3];
var res=ary.splice(ary.length,0,6);
console.log(ary);
console.log(res);

/* 
  往数组的末尾追加
  + push
  + ary.splice(ary.length,0,6);
  + ary[ary.length]=200

*/


/* 
  删除第一项
  + shift
  + splice(0,1)

*/
var ary=[1,2,3];
ary.splice(0,1);
console.log(ary);


/* 
  删除最后一项
  + pop
  + ary.splice(ary.length-1,1);
  + ary.length--
*/
var ary=[0,1,2,3];

ary.splice(ary.length-1,1);