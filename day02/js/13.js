var num=parseInt("px35.5");
if(num==35.5){
    alert(0)
}else if(num==35){
    alert(1)
}else if(num==NaN){
    alert(3)
}else if(typeof num=='number'){
    alert(4)
}else{
   alert(5)
}