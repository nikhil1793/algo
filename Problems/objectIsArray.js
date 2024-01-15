// function objectIsArray(obj){
//     if(obj.hasOwnProperty(length)){
//         console.log("Array");
//         return true;
//     }
//     console.log("Not Array");
//     return false;
// }

// function objectIsArray(obj){
//     if(Array.isArray(obj)){
//         console.log("Array");
//         return true;
//     }
//     console.log("Not Array");
//     return false;
// }

function objectIsArray(obj){
    if(Object.prototype.toString.call(obj) === "[object Array]"){
        console.log("Array");
        return true;
    }
    console.log("Not Array");
    return false;
}

objectIsArray({a:1});

objectIsArray([{a:1},{b:2}]);
