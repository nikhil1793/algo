/**
 * * when given no. from 1 to n - use cyclic sort
 * * if no. starts with [1,2,3,4] - correctIndex = arr[i] - 1
 * * if no. starts with [0,1,2,3,4] - correctIndex = arr[i]
 */

function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    const correctIndex = arr[i] - 1;
    if (arr[i] !== arr[correctIndex]) {
      //* swap with correct Index
      const temp = arr[correctIndex];
      arr[correctIndex] = arr[i];
      arr[i] = temp;
    } else {
      i++;
    }
  }
  console.log('CYCLIC SORT : ', arr);
}

cyclicSort([5,4,1,3,2]);

//* i = 0 

/** [5,4,1,3,2]
 * * correctIndex = 4 ->  [  2,4,1,3,5 ]
 * [  2,4,1,3,5 ]
 * * correctIndex = 1 ->  [  4,2,1,3,5 ]
 * [  4,2,1,3,5 ]
 * * correctIndex = 3 ->  [  3,2,1,4,5 ]
 * [  3,2,1,4,5 ]
 * * correctIndex = 2 ->  [  1,2,3,4,5 ]
 */

//* i = 1

//* i = 2

//* i = 3

//* i = 4

/**
 * * find the missing number in array having adjacent numbers
 * * can be done using same concept of cyclic sort
 * * [ 4, 0, 1, 2 ] Ans: 3
 * * [ 3, 0, 1, 2 ] Ans: 4
 * @param {*} arr 
 */
function findTheMissingNumber(arr){
  let i = 0;
  while(i < arr.length){
    const correctIndex = arr[i];
    if(arr[i] < arr.length && arr[i] !== arr[correctIndex]){
      const temp = arr[correctIndex];
      arr[correctIndex] = arr[i];
      arr[i] = temp;
    } else {
      i++;
    }
  }
  
  for(let mi=0; mi < arr.length ; mi++){
    if(mi !== arr[mi]){
      return mi;
    }
  }

  return arr.length;
}

const missingNUmber = findTheMissingNumber([3,0,1,2]);
console.log(`Missiing no. in [3,0,1,2] is ${missingNUmber}`);


/**
 * * find the missing number in array having adjacent numbers
 * * can be done using same concept of cyclic sort
 * * [ 4, 3, 2, 7, 8, 3, 2, 1 ] Ans: 5, 6
 * @param {*} arr 
 */
 function findTheMissingNumbers(arr){
  let i = 0;
  while(i < arr.length){
    const correctIndex = arr[i] - 1;
    if(arr[i] !== arr[correctIndex]){
      const temp = arr[correctIndex];
      arr[correctIndex] = arr[i];
      arr[i] = temp;
    } else {
      i++;
    }
  }

  console.log(arr);

  for(let mi=0; mi < arr.length ; mi++){
    if(mi !== arr[mi] - 1){
      console.log(mi + 1);
    }
  }

}

findTheMissingNumbers([ 4, 3, 2, 7, 8, 3, 2, 1 ]);


