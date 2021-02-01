/* 
 switch case 里面的比较是绝对比较，相当于三个等于号

*/
var num="6";
// if(num==5){
//     num++;
// }else if(num==6){
//     num--;
// }else {
//     num=0;
// }

switch (num){
  case 5:
    num++;
    break;
  case 6:
    num--;
    break;
  default:
    num=0;      
}

console.log(num);