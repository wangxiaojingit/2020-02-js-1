/* 
 window 全局作用域：
 var n  ===》0
 function a
 var c
*/
var n=0;
function a(){
    // 私有作用域：变量提升 
    // var n====>10===》11===>12
    // function b
    var n=10;
    function b(){
        // 私有作用域：
        n++;// n不是私有的；//
        console.log(n);// 11  12
    }
    b();//
    return b;
}
var c=a();// 等于 小b
c();//12
console.log(n);//0