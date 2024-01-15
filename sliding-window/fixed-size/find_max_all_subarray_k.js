function find_max_all_subarray_k(arr, k) {
  let result = [];
  let queue = [];

  let i = 0;
  let j = 0;

  while (j < arr.length) {
    //* calculation
    queue.push(arr[j]);

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      //* result
      result.push(Math.max(...queue));
      queue.shift();
      i++;
      j++;
    }
  }

  return result;
}

const result = find_max_all_subarray_k([1, 3, -1, -3, 5, 3, 6, 7], 3);

console.log(result);
