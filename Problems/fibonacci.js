/**
 * Iterative Soln
 */

function fibonacciIterative(n){

    var result = [0,1];
    for(let i=2;i<=n;i++){
        result.push(result[i-2]+result[i-1]);
    }
    console.log(result);
}

fibonacciIterative(4);

/** 
 * slow Recursive Soln
 * Improve the time complexity by using cache called as memoization
 */
function slowfibonacciRecursive(n){
    if(n < 2) return n;
    return slowfibonacciRecursive(n-1) + slowfibonacciRecursive(n-2);
}

//f(2) + f(1) = f(1) + f(0) + f(1) = 3

function memoize(fn){
    var cache = {};
    return function(...args){
       if(cache[args]) return cache[args];

       var result = fn.apply(this,args);
       cache[args] = result;
       console.log("cache",cache);
       return result;
    }
}

var fastRecursionFn = memoize(slowfibonacciRecursive);
var r = fastRecursionFn(6);
console.log(r); 
