/**
 * Recursion
 * slice makes copy of array
 * splice mutates the array -- change the original array
 */
function chunk(arr,size){
    if(arr.length === 0) return;
    console.log(arr.slice().splice(0,size));
    return chunk(arr.slice(size),size);
}

chunk([1,2,3,4,5,6,7,8,9],2);


/**
 * Using While and splice 
 */
function chunkWhile(arr,size){
    while(arr.length){
       console.log(arr.splice(0,size));
    }
}

chunkWhile([1,2,3,4,5,6,7,8,9],3);

/**
 * using without any support function
 */

 function chunkRaw(arr,size){
     let chunk = [];
     for(let elem of arr){
         let last = chunk[chunk.length -1];
         if(!last || last.length === size){
             chunk.push([elem]);
         }else{
             last.push(elem);
         }
     }
     return chunk;     
 }

 console.info('chubk Raw....')
 var r = chunkRaw([1,2,3,4,5,6,7,8,9],4);
 console.log(r);



