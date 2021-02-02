//var a  

var a=0;
if(true){
    console.log(a); //  function a(){}
   a=1;
   console.log(a);//1
   function a(){}  // 以function 作为分隔，上面的话改的就是上级作用域的，下面的话就是私有作用域
   的

   function a(){console.log(2)}
   a=21;
   console.log(a);// 21
}
console.log(a);//1


// 只对等号左边的进行变量提升

var f=function(){

}


function fn(){
    // console.log(a);//undefined
    return function(){

    }
    var a=3;
}


fn();

// 如果名字相同，只声明一次，但是可以重复赋值