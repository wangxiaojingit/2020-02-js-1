var i=10;
function fn(){
   return function(n){
      console.log(n+(++i));
   }
}
var f=fn();
f(20);
fn()(20);
fn()(30);
f(30);