/* 
  

*/

Math.abs(-2);// 求绝对值

//Math.floor（向下取整） 不管是正数还是负数，取最小值
//Math.ceil（向上取整） 不管是正数还是负数，取最大值

Math.floor(1.1);//1
Math.floor(1.5);//1
Math.floor(-1.3);//-2


Math.ceil(1.1);//2
Math.ceil(-1.3);//-1


// Math.round() 四舍五入 跟你之前理解的相同，对于负数来说，想要进一，需要比5大一点点
Math.round(1.1);//1
Math.round(1.5);//2
Math.round(-1.1);//-1
Math.round(-1.5);//-1
Math.round(-1.51);//-2

//Math.min() 取最小值，Math.max 取最大值
Math.min(1,2,3);//1
Math.max(1,2,3);//3

Math.min(1,2,3);//1
Math.max(1,2,3);//3
var ary=[4,5,6];
Math.max(ary);//NaN
Math.max(...ary);//6

// Math.random() 获取[0-1) 之间的随机小数
// 获取n-m之间的随机数：Math.random()*(m-n)+n;

// 获取 10-20之间的随机数 Math.random()*(20-10)+10;





//Math.sqrt() 开平方
Math.sqrt(9);//3
//Math.pow(n,m); n的m次幂
Math.pow(2,3);//8

Math.PI;//3.141592653589793