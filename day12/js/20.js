console.log(num);
var num = 1;
console.log(num);
var num = 2;
console.log(num);
fn();
function fn(){
    console.log(1);
}
function fn(){
    console.log(2);   
}
fn();
function fn(){
    console.log(3);
}
fn=100;
function fn(){
    console.log(4);   
}
fn();