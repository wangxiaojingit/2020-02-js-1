var  str ="https://www.baidu.com?name=zhufeng&age=10&id=14";

// var obj={
//     name:"zhufeng",
//     age:10,
//     "id":14
// }
function getParams(str){
    var obj={};
    //["https://www.baidu.com","name=zhufeng&age=10&id=14"]
    var params=str.split("?")[1];//"name=zhufeng&age=10&id=14"
    if(params){
        var paramsAry=params.split("&");//["name=zhufeng","age=10","id=14"];
        for(var i=0;i<paramsAry.length;i++){
            // i=0; item="name=zhufeng"
            // i=1        "age=10"
            // i=2        "id=14"
             var item=paramsAry[i];
             var key= item.split("=")[0];//["name","zhufeng"]
             var value=item.split("=")[1];
             obj[key]=value;
             //obj["name"]=100
        }
        return obj;
    }
    
}
var res=getParams(str);
console.log(res.name);

