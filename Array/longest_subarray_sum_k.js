/**
 * * subarray is part of array with contigious memory
 */

let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];

/**
 * * Time Complexity : O(n3) approx.
 * @param {*} arr
 * @param {*} k
 * @returns
 */
function longest_subarray_sum_k_brute(arr, k) {
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      //* loop for finding sum of subarray from index i to j
      for (let k = i; k < j; k++) {
        sum = sum + arr[k];
      }
      if (sum === k) {
        longest = Math.max(longest, j - i);
      }
    }
  }
  return longest;
}

//const result =  longest_subarray_sum_k_brute(arr, 6);

/**
 * * TC : O(n2)
 * @param {*} arr
 * @param {*} k
 * @returns
 */
function longest_subarray_sum_k_brute_optimised(arr, k) {
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum === k) {
        longest = Math.max(longest, j - i + 1);
      }
    }
  }
  return longest;
}

//const result = longest_subarray_sum_k_brute_optimised(arr, 9);

/**
 * * TC: O(n)
 * * SC: O(n)
 * @param {*} arr
 * @param {*} k
 * @returns
 */
function longest_subarray_sum_k_brute_better(arr, k) {
  let longest = 0;
  let hashMap = {};
  let prefixSum = 0;
  for (let i = 0; i < arr.length; i++) {
    prefixSum = prefixSum + arr[i];

    if (prefixSum === k) {
      longest = Math.max(longest, i + 1);
    }

    const temp = prefixSum - k;
    if (hashMap[temp] !== undefined) {
      const len = i - hashMap[temp];
      longest = Math.max(longest, len);
    }

    //* will add the value in array only one time , will not update if sum exists again
    //* in case 0 comes after any number sum will be the same - no need to update hash for that case
    //* because we want the longest subarray
    if (hashMap[prefixSum] === undefined) {
      hashMap[prefixSum] = i;
    }
  }
  return longest;
}

//const result = longest_subarray_sum_k_brute_better(arr, 3);
//const result = longest_subarray_sum_k_brute_better([2,0,0,3], 3);

function longest_subarray_sum_k_optimised_two_pointer(arr, k) {
  let left = 0;
  let right = 0;

  let sum = arr[0];
  let longest = 0;

  while(right < arr.length) {

    while(left <= right && sum > k) {
        sum = sum - arr[left];
        left++;
    }

    if(sum === k) {
        longest = Math.max(longest, right - left + 1)
    }

    right++;
    if(right < arr.length) {
        sum = sum + arr[right];
    }
  }
  return longest;
}

//const result = longest_subarray_sum_k_optimised_two_pointer(arr,3);

const result = longest_subarray_sum_k_optimised_two_pointer([1,-2,2,2,0,0,1,1,3,5],3);
console.log(result);
