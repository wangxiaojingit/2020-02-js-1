/*
 charAt(0)
 作用：获取指定索引对应的字符
 参数：索引
 返回值：索引对应的字符
 */

 var str="abc";
 str.charAt(0);//"a"
 // 如果超出字符串的长度
 str.charAt(100);//""

 str[0];//"a"
 // 如果超出字符串的长度
 str[100];//undefined

 /* 
  charCodeAt(索引)
  作用：获取指定索引对应的字符的ASCII码值
 */

 var str="zhufeng";
 str.charCodeAt(0);//122   


 /* 
  indexOf:获取字符首次在字符串中出现的位置索引
  lastIndexOf：获取字符最后一次在字符串中出现的位置索引
  如果里面不包含此字符，返回值就是-1
 
  if(str.indexOf("a")>=0){

  }
 */

 /* 
  slice(n,m)
  作用：从索引n开始复制到索引m结束（不包含m项）
  注意：
  + 如果第二个参数不写，就是从第n项开始复制到最后一项结束
  + 无参数的时候，也是全部复制
  + 负数索引和正数索引的一个关系：字符串的总长度+负数索引=正数索引
 */

var str="abcdef";
var res=str.slice(0,3);//"abc"
var res2=str.slice(-3,-1);//"de"
var res3=str.slice(3,5);//"de"
str.length;//6
str.slice();//"abcdef"
str.slice(0);//"abcdef"
str.slice(-3);//"def"
/* 
substring(n,m)
作用：跟slice 一样，区别在于：substring 不支持负数索引,slice支持
*/
var  str="abcdef"
str.substring(0,3);//"abc"

/* 
substr(n,m)
作用：从索引n开始，截取m个
*/
var str="abc";
str.substr(0,2);//"ab"

/* 
  toUpperCase();// 转为大写
  toLowerCase();// 转为小写
*/


/* 
repalce(n,m)
n:你想要替换掉的字符，还可以跟正则（用来指定一些规则）
m:你想替换成的字符

*/
var str="zhufengzhuhahzhuhah";
var  res=str.replace("zhu","哈");//"哈fengzhuhahzhuhah"
str.replace(/zhu/g,"哈");//"哈feng哈hah哈hah"


/* 
split(分割符)：
作用：按照指定的分割符，把字符串分割成数组
把字符串转成数组？(分割符)split
把数组转成字符串(连接符)  join
*/


var str="10:22:33";
str.split(":");//["10", "22", "33"]