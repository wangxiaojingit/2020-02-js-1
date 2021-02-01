var num=5
// if(num>=5){
//    num++;// num=num+1;
// }else{
//    num--
// }


/* 
  条件？条件成立执行语句：条件不成立的执行语句;
  如果说有多条语句，我们可以用一个小括号包起来，语句之间用逗号进行分割
*/
 num>=5?num++:num--;
 num>=5?(num++,console.log(1)):num--;



 if(num>3){
   alert("num")
 }

 // 占位符
 num>3?alert("num"):undefined;
 num>3?alert("num"):null;
 num>3?alert("num"):void 0;
