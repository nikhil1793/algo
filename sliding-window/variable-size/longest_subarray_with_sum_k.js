function longest_subarray_with_sum_k(arr, k) {
  let i = 0;
  let j = 0;

  let longest = -Infinity;

  let sum = 0;

  while (j < arr.length) {

    //* calculation
    sum = sum + arr[j];

    if (sum < k) {
      j++;
    } else if (sum === k) {
      longest = Math.max(longest, j - i + 1);
      j++;
    } else if (sum > k) {
      while (sum > k) {
        sum = sum - arr[i];
        i++;
      }
      j++;
    }
  }

  return longest;
}

const result = longest_subarray_with_sum_k([4, 1, 1, 1, -2, 3, 5], 5);

console.log(result);
