// 求一个1到100的所有数之和
// function total(x,y){
//     var res=x;
//     for(var i=2;i<=y;i++){
//        res+=i;
//     }
//     return res;
// }

// console.log(total(1,100));

function total(n){
    if(n>100){
      return 0;
    }
    return  n+total(n+1);
}

total(1);