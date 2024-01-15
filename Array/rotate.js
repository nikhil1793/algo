const arr = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * * Rotate the array by one step
 * * Time Complexity: O(n)
 * @param {*} arr
 * @returns
 */
function rotate_by_one(arr) {
  const first = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = first;
  return arr;
}

//rotate_by_one(arr);


/**
 * * rotate by d step -- brute force apprach
 * * Time Complexity : O(d) + O(n-d) + O(d) =  O(n + d)
 * * Space Complexity: O(d)
 * @param {*} arr 
 * @param {*} d 
 */
function rotate_by_d_brute_force(arr, d) {
  //* create array from d
  const dArray = [];
  for (let i = 0; i < d; i++) { //* O(d)
    dArray.push(arr[i]);
  }

  //* shift to left
  for (let i = d; i < arr.length; i++) { //* O(n-d)
    arr[i - d] = arr[i];
  }

  //* replace dArray in last of shifted array
  let j = 0;
  for (let i = arr.length - d; i < arr.length; i++) { //* O(d)
    arr[i] = dArray[j];
    j++;
  }
}

//rotate_by_d_brute_force(arr, 3);


/**
 * * OPTIMISED IMPLEMENTATION
 * * * Time complexity : O(n/2) + O(n-d/2) + O(n/2)  = O(n)
 * * Time complexity : O(n) + O(n-d) + O(n)  = O(2n)
 * * Space complexity : O(1)
 * @param {*} arr 
 * @param {*} d 
 */
function rotate_by_d(arr, d) {

    d = d % arr.length;

    const reverse = (arr, s, e)  => {
        const mid = Math.floor((e - s) / 2);
        for(let i=0; i < mid; i++) {
            const temp = arr[s + i];
            arr[s + i] = arr[e - i - 1];
            arr[e - i - 1] = temp;
        }
    };

    reverse(arr, 0, d);  //* O(d)
    reverse(arr, d, arr.length); //* O(n-d)
    reverse(arr, 0, arr.length); //* O(n)
}

rotate_by_d(arr,9);

console.log(arr);
