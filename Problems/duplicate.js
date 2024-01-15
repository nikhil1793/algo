// function duplicate(arr){
//   return [...arr,...arr];
// }

function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4, 5]));
