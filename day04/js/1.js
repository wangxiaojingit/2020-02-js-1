
// for in 循环

var obj={name:"lili",age:18,100:1,0:2};

for(var key in obj){
    console.log(key);// 属性名
    console.log(obj[key]);// 属性值

}

// for

for(var i=1;i<5;i++){
   console.log(i);
}


// while 循环，只要循环条件成立，就会一直走循环体里面的语句
var num=1;
while(num>0&&num<5){     
      num++;
      console.log(num);
}

// 无论条件是否成立，一上来就会先执行一次循环体里面的语句
var num1=0;
do{
  console.log(num1);
}while(num1>0);
