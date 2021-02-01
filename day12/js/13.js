/* 
window 全局作用域：
变量提升：var a 

*/
console.log(a);//undefined
var a=0;  // a=0;

if(true){
    // 只要条件成立立马赋值function， a：function a(){}
    console.log(a);// function a(){};
   a=1;// a=1
   console.log(a);//1  
   function a(){};// 对function 的需要特殊记忆，会以function 函数作为分割线，如果在下面进行改值的话，改的是私有的
   a=21;//  
   console.log(a);//21
}
console.log(a);//1