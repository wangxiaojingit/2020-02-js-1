var obj={"name":"lili",0:100};
// 获取
obj.name;
obj["name"];
obj[0];
obj.job;// undefined
// 如果原来有就是修改，没有就是新增
obj.name="dav";
obj.job="aa";
//删除
obj.name=null;
delete obj.name;
delete obj["name"];
//if  else if else

// 逻辑运算符： &&  ||

// typeof  返回结果首先就是一个字符串 ： "number" "string" "boolean" "undefined" "object" "function"

typeof typeof typeof typeof 1     
// 条件？成立执行语句:不成立执行语句


var num=12;
// if(num>0){
//    if(num<10){
//      num++;
//    }else{
//      num--;
//    }
// }else{
//     if(num==0){
//        num++;
//        num=num/10;
//     }
// }

num>0?(num<10? num++:num--):(num==0?(num++,num=num/10):null);
