/**
 * * RECURSION
 */

/**
 * * find the nth fibonaci no
 * * 0 1 1 2 3 5 8 13 ......
 */
function findFibonacci(n){
   if(n === 0 || n === 1) return n;
   return findFibonacci(n-1) + findFibonacci(n-2);
}

console.log(findFibonacci(7));