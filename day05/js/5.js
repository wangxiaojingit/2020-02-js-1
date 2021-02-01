/* 
数组去重
var ary=[1,2,3,2,4];
目的：ary=[1,2,3,4];
去重原理：依次拿出数组中的每一项，跟后面的所有项进行比较
第一次：1
       ==》2,3,2,4
第二次：2
       ===》3,2,4     删除掉 2  ===》3,4
第三次：3
       ===》4       
*/
var ary=[1,1,1,2,4];
var ary2=[3,3,4];
// 依次拿出数组中的每一项（最后一项不用跟后面再比了，刨除最后一项：ary.length-1）
// for(var i=0;i<ary.length-1;i++){
//     // 拿出的每一项
//     var getItem=ary[i]
//     // 要依次拿出剩余的所有项，再一一比较，如果有相同说明重复，删除
//     for(var j=i+1;j<ary.length;j++){
//          // 如果说相同，说明重复，
//          if(getItem==ary[j]){
//             ary.splice(j,1);
//             j--;
//          }
//     }
// }
// console.log(ary);


function unique(ary){
    for(var i=0;i<ary.length-1;i++){
        // 拿出的每一项
        var getItem=ary[i]
        // 要依次拿出剩余的所有项，再一一比较，如果有相同说明重复，删除
        for(var j=i+1;j<ary.length;j++){
             // 如果说相同，说明重复，
             if(getItem==ary[j]){
                ary.splice(j,1);
                j--;
             }
        }
    }
    return ary;
}
var res=unique(ary);
var res2=unique(ary2);
console.log(res);
console.log(res2);


