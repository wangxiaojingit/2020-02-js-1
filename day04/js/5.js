// 求和,不知道传的个数


function total(){
   var res=0;
   for(var i=0;i<arguments.length;i++){
      console.log(arguments[i]);
      // i=0  res=0+1=1
      // i=1  res=res+2==>1+2=3
      // i=2 res=3+3
      res=res+arguments[i]
   }


   return res;
}

var res1=total(1,2,3);
var res2=total(1,2,3,4,"12","12px");

