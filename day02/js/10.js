
var num=1;
var flag=-1;
// && 且  所有的条件必须都成立，才能执行语句
if(num>0&&flag>0){
   alert("满足")
}
// || 或 只要满足其一就可以执行语句
if(num>0||flag>0){
    alert("满足2")
}
// 小括号里面最终转换的都是布尔
if(100){
  alert("你真帅！")
}