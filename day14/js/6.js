console.log(a);// 报错
 a=12;
function fn(){
    console.log(a);
     a=13;
}
fn();
console.log(a);