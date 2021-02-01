//var str="2019-8-18 12:32:18";
//   "2019年08月18日 12时32分18秒"  
// 
function addZero(num){
    return num<10?"0"+num:num;
}
var str="2019-8-8 12:2:18";
var strAry=str.split(" "); //[ '2019-8-18', '12:32:18' ]
var leftAry=strAry[0].split("-");//'2019-8-18' ["2019","8","18"]
var rightAry=strAry[1].split(":");//'12:32:18'  ["12","32","18"]
var res=leftAry[0]+"年"+addZero(leftAry[1])+"月"+addZero(leftAry[2])+"日"+" "+addZero(rightAry[0])+"时"+addZero(rightAry[1])+"分"+addZero(rightAry[2])+"秒";
console.log(res);


// function addZero(num){
//    if(num<10){
//       return "0"+num
//    }else{
//        return num;
//    }
// }


