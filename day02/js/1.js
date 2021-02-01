var name="lili";
console.log(name);
alert(1);




const b="b";

function fn(){

}
fn();

Number({});//{}.toString()===>"[object Object]"==>Number("[object Object]")==>NaN;
Number([]);//[].toString()===>""===>Number("")===>0
Number([1,2]);//[1,2].toString()===>"1,2"===>NaN
Number([1]);//[1].toString()===>"1"===>1

Number("12px");//NaN
parseInt("12px");//12
parseFloat("12.5px");//12.5
parseFloat("12.5.6px");//12.5

// NaN==NaN  false

// isNaN(1)

isNaN(undefined);//Number(undefined)===>NaN  ===>isNaN(NaN);==>true

// string
//"1" 
var str="abcd";
//str.length-1;
str[str.length-1];

1+2+3+"px"+6+8;// 6+"px"==>"6px"+6=>"6px68"

// boolean: true/false
// Boolean(0)==>false
// !0  true
// !!0
// 0 NaN null "" undefined  
