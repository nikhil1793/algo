
// fn()

console.log(fn);

console.log(a);


{

    function fn(){
        var a = 10;
        console.log('fn called', a);
    }

    var a = 10;

}

(function(){

    var a = 11;

    function fn2(){
        var a = 22;
        console.log('fn2', a);
    }

})();

console.log(a);


