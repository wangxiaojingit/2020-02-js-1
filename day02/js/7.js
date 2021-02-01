var obj={
    n:10,
    b:obj.n*10
}
console.log(obj.b);  //Uncaught TypeError: Cannot read property 'n' of undefined