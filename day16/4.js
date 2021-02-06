function fun(){
    this.a=0;
    this.b=function(){
        //f  0
        alert(this.a);
    }
}
fun.prototype={
    b:function(){
        this.a=20;
        alert(this.a);
    },
    c:function(){
        this.a=30;
        alert(this.a)
    }
};

var f=new fun();
f.b();