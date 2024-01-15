// function multiply(a){
//    return function(b){
//        return function(c){
//            return a*b*c;
//        }
//    }
// }

function multiply(...a){ // Full of chanining --- GOD bolte!!!!!
    let total = a.reduce((x,o)=>x*o);
    function helperFn(...b){
      if(b.length > 0){
        total = total * b.reduce((x,o)=>x*o); 
        return helperFn;
      }
      return total;
    }
    return helperFn;
 }

console.log(multiply(2,5)(4,8)(10)());