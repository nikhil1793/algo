const arr = [1, 2, -1, 0, -2, 2, 1, -4];

/**
 * * Time Complexity: O(n2)
 * @param {*} arr 
 * @returns 
 */
function longestSubarraySum_brute(arr) {
  let longest = 0
  let longestSum = 0
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sum = sum + arr[j];
        if(sum >= longestSum) {
            longestSum = sum;
            longest = Math.max(longest, j - i + 1);
        }
    }
  }
  return longest;
}

//const result = longestSubarraySum_brute(arr);


/**
 * * KADANE's ALGO
 * @param {*} arr 
 */
function longestSubarraySum(arr) {
    let mSum = 0;
    let sum = 0;
    let start = 0;
    let end = 0;

    for(let i=0; i< arr.length; i++) {
        if(sum === 0){
            start = i;
        }
        sum = sum + arr[i];
        if(sum >= mSum){
            end = i;
            mSum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return [start, end];
}

const result = longestSubarraySum(arr);
console.log(result);
