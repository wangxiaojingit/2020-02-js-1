(function(){
    function jquery(){
       console.log(1)
    };
    var num=3;
    // 通过给window添加这样的属性和属性值，就可以把此方法暴露出去
    window.jquery=window.$=jquery;

})();

jquery();
$();


