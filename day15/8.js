/* 
 高级单例模式
*/


var utils=(function(){
    var num=10;
    function getDate(){

    }
    function bindHTMl(){

    }
    function banner(){}
    //....
    return {
        // 初始化页面
        init:function(){
            getDate();
            bindHTMl();
            banner();

        },
        num:num
    }

})();

utils.init();
utils.num;