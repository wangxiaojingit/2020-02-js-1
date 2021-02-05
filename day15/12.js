/* 
instanceof ： 
 语法：实例 instanceof 类
 作用：用来判断当前实例是不是隶属于某个类
 结果：布尔数据类型，如果是true 是当前类的实例，false 不是。
*/

function Fn(){
    this.name="li";
    this.age=10;
}

var f1=new Fn();
var f2=new Fn();

//f1 instanceof Fn;

/* 
 in (不区分公有还是私有)
 语法： attr in obj
 结果：布尔
    + true 有这个属性（这个对象不论私有还是公有，只要有这个属性，返回值就是true）
    + false 没有
*/

//console.log("name" in f1);
//console.log("toString" in f1);


/* 
hasOwnProperty:
语法：对象.hasOwnProperty("属性名")
作用：检测某个属性是不是某对象的私有属性，只有返回值是true代表就是私有
*/

//f1.hasOwnProperty("name");//true
//f1.hasOwnProperty("toString");//false


/* 
 让你封装一个检测公有属性的方法：
 如果是公有的，就返回true
 不是公有的、或者说没有此属性返回值就是false

 怎么判断是不是公有的？
 一条：有这个属性（无论公还是私）
 二条：不是公有就是私有

*/

// function hasPublicProperty(obj,attr){
//     // this
//     if(attr in obj&&!obj.hasOwnProperty(attr)){
//        return true;
//     }
//     return false;

// }
function hasPublicProperty(obj,attr){
    return attr in obj&&!obj.hasOwnProperty(attr)?true:false;
}
console.log(hasPublicProperty(f1,"toString"));//true
console.log(hasPublicProperty(f1,"name"));//false
console.log(hasPublicProperty(f1,"job"));// false