// function fn(){
//    fn()
// }

// fn();

// 求1 到100 所有数之和:1+2+3+4+5+...+100


function fn(n){
  if(n>100){
      return 0;
  }
  return  n+fn(n+1)
}

var res=fn(1);
console.log(res);
