var  str ="https://www.baidu.com?name=zhufeng&age=10&id=14";


function getParams(str){
    var obj={};
    var strParams=str.split("?")[1];//name=zhufeng&age=10&id=14
    if(strParams){
        var strAry=strParams.split("&");//["name=zhufeng","age=10","id=14"]
        for(var i=0;i<strAry.length;i++){//["name","zhufeng"]
           var key= strAry[i].split("=")[0];
           var value= strAry[i].split("=")[1];
           obj[key]=value;
    
        }
    
    }

    return obj;
}
getParams(str);
