var fn=function(x,y){
    return x+y
}

var fn=(x,y)=>{
    return x+y;
}

var fn=x=>{
    return x;
}

var fn=x=>x
// 箭头函数里面没有arguments 也没有this
var fn1=(...arg)=>{
    console.log(arg);
   // console.log(arguments);
    //return x+y;
}
fn1(1,2)