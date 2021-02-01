/* 
 变量提升的特殊性三：在函数里面return 下面的代码虽然不能执行了，但是照常可以进行变量提升，
 return 后面的这个值即使是函数，在当前作用域也不会进行变量提升

*/



function fn(x,y){
   a();
   return function (){}
   function a(){
       console.log(1);
   }
}

fn(1,2)