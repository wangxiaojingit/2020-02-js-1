/* 
 共用方法：
*/


var utils=(function(){
    var num=3;
    //.....
    function banner(){
        console.log("banner");
    }

    return {
        banner:banner,
        num:num
    }


})();