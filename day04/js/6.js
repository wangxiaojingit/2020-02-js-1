// 求和,不知道传的个数

// 如果说能转成有效数字，你转一下，然后再加，如果转换之后是非有效数字，别加


function total(){
   var res=0;
   for(var i=0;i<arguments.length;i++){
      // 转成数字
      var item=Number(arguments[i]);
      //isNaN(item)==false
      // 如果说它是有效数字，再累加
      if(!isNaN(item)){
         res=res+item;
      }
   }
   return res;
}
var res2=total(1,2,3,4,"12","12px");

