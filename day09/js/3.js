// 清除定时器的两种方法：clearInterval clearTimeout
// var num=0;
// var time1=setInterval(function(){
//         num++;
//         if(num>10){
//             //清除定时器
//            clearInterval(time1);
//            time1=null;
//         }
//         console.log(num);
// },1000)



var time2=setTimeout(function(){
    console.log(1);
},1000);

clearTimeout(time2);
time2=null;



