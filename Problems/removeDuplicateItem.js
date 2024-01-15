/**
 * using Array sort 
 */
function removeDuplicateItem(arr){
     var previous;
     var result = [];
     for(let item of arr.sort()){
        if(item !== previous){
            result.push(item);
        }
        previous = item;
     } 
     console.log(result);
}

removeDuplicateItem([1,2,3,4,5,3,2,7]);