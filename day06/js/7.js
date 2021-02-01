/* 
var ary=[8,2,1,5]
需求：从小到大排序
原理：两两进行比较，如果前者比后者大，交换顺序

第一轮：
     [2,1,5,8];// 经过第一轮比较，得到了最大值8  ary.length-1-0  3
第二轮：
     [1,2,5,8];// 经过第二轮比较，得到了倒数第二个最大值5   ary.length-1-1
第三轮比较
      [1,2,5,8];// 经过第三轮比较，得到了倒数第三个最大值2  ary.length-1-2
第四轮还用比吗？ 总共四个数，你已经得到了3个最大值，最后一个肯定是最小值，不用再比


总轮数的规律：数组的长度-1
每轮比较多少回？
两两进行比较 ary.length-1-已经比较过的轮数
  
*/

var ary = [8, 2, 1, 5];
function mySort(ary) {
    // 轮数
    for (var i = 0; i < ary.length - 1; i++) {
        // 两两进行比较
        for (var j = 0; j < ary.length - 1 - i; j++) {
            //如果前者比后者大，就交换顺序
            if (ary[j] > ary[j + 1]) {
                var temp = ary[j];//把原来的这个值存一份
                ary[j] = ary[j + 1];
                ary[j + 1] = temp;
            }
        }
    }
    return ary;
}

console.log(mySort(ary));