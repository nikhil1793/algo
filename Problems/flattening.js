/**
 *  Flattening at level 1
 */
function flattening(arr){
   return arr.reduce((result,item)=>result.concat(item),[]);
}

console.log(flattening([1,2,[3,4]]));

/**
 *  Flattening at deep level
 */
function flatDeep(arr,deep=1){
   return deep > 0 ? arr.reduce((r,i)=>{
        return r.concat(Array.isArray(i) ? flatDeep(i,deep-1):i);
   },[])  : arr.slice();
}

console.log(flatDeep([1,2,[3,4]],1));
console.log(flatDeep([1,2,[3,[4,5]]],1));

function flatDeepest(arr){
    return arr.reduce((r,i)=>{
         return r.concat(Array.isArray(i) ? flatDeep(i):i);
    },[]);
 }

 console.log(flatDeepest([1,2,[3,4]]));
console.log(flatDeepest([1,2,[3,[4,5]]]));

/**
 * flattening array using stack
 */

function flatten(input) {
    const stack = [...input];
    const res = [];
    while(stack.length) {
      // pop value from stack
      const next = stack.pop();
      if(Array.isArray(next)) {
        // push back array items, won't modify the original input
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    // reverse to restore input order
    return res.reverse();
}

/**
 * flattening array using generator
 */

 function* flattenGenerator(arr){
     for(let item of arr){
         if(Array.isArray(item)){
             yield* flattenGenerator(item);
         }else{
             yield item;
         }
     }
 }

const arr = [1, 2, [3, 4, [5, 6]]];
console.log([...flattenGenerator(arr)]);




