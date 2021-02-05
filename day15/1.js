function fn(){
   this
};

var obj={
    fn:fn
};

fn();
obj.fn();


(function(){
    // this window
})();


setTimeout(function(){
    console.log(this)
},1000)