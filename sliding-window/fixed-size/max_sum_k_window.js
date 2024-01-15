const arr = [2, 1, 3, 5, 2, 0, 2, 1];

/**
 * * brute force
 * * TC: O(n3)
 * @param {*} arr
 * @param {*} k
 * @returns
 */
function max_sum_k_window_brute(arr, k) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j + k - 1] !== undefined) {
        let sum = 0;
        for (let x = j; x < j + k; x++) {
          sum = sum + (arr[x] || 0);
        }
        max = Math.max(max, sum);
      }
    }
  }

  return max;
}

//const result = max_sum_k_window_brute(arr, 3);

/**
 * * optimised 
 * * TC: O(n)
 * @param {*} arr 
 * @param {*} k 
 * @returns 
 */
function max_sum_k_window(arr, k) {
  let max = -Infinity;
  let sum = 0;

  let i = 0;
  let j = 0;

  while (j < arr.length) {
    sum = sum + arr[j];

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      max = Math.max(max, sum);
      sum = sum - arr[i];
      i++;
      j++;
    }
  }
  return max;
}

const result = max_sum_k_window(arr, 3);

console.log(result);
