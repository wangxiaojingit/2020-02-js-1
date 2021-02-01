// 打印1 到10

// for(var i=1;i<=10;i++){
//    console.log(i)
// }

function fn(n){
   if(n>10){
      return;
   } 
   console.log(n);//1 2
   fn(n+1);// fn(2) fn(3)
}

fn(1)