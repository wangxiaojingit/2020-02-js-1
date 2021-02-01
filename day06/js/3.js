// 求1到100中同时能被2整除又能被3整除的所有数之和

// var res=0;
// for(var i=1;i<=100;i++){
//     if(i%2==0&&i%3==0){
//         res+=i;
//     }
   
// }
// console.log(res);
// 

function total(n){
    if(n>100){
      return 0
    }
    if(n%2==0&&n%3==0){
      return  n+total(n+1);
    }else{
      return  total(n+1);
    }

}

console.log(total(1));