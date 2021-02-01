/* 

 new Date();//获取你当前电脑的本地时间 Wed Jan 27 2021 15:45:50 GMT+0800 (中国标准时间)
*/
// function addZero(num){
//     if(num<10){
//        num="0"+num;
//     }
//     return num;

// }
function addZero(num){
    return num<10?"0"+num:num;
}
function clock() {
    var res = new Date();// 一个时间对象
    var year = res.getFullYear();//年
    var month = res.getMonth() + 1;//[0-11]对应的是1到12月
    var date = res.getDate();//日期
    var day = res.getDay();//值的范围[0-6] 对应周日周一周二------周六

    var hours = res.getHours();// 小时
    var minutes = res.getMinutes();//分钟
    var seconds = res.getSeconds();// 秒
    var milliseconds = res.getMilliseconds();// 毫秒

    var localtime = res.toLocaleString();//"2021/1/27 下午3:57:51"
    var localDate = res.toLocaleDateString();//"2021/1/27"
    var localDate = res.toLocaleTimeString();//"下午3:57:51"
    //var day=res.getDay();//值的范围[0-6] 对应周日周一周二------周六
    var weekStr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]

    // var res="2021年1月27号 周三 16:15:00";

    var res = year + "年" + addZero(month) + "月" + addZero(date) + "日" + weekStr[day] + " " + addZero(hours )+ ":" +addZero(minutes)  + ":" + addZero(seconds);

    return res;

}


var ele=document.getElementById("clock");
ele.innerHTML=clock();

// 每隔多长时间就会执行以下回调函数里面的代码
setInterval(function(){
    ele.innerHTML=clock();
},1000);

var num=9;
