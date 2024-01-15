/**
 * * binary search using recursion
 */

function binarySearch(arr, target, s, e) {
  if (s > e) return -1;

  const mid = Math.floor(s + (e - s) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearch(arr, target, s, mid - 1);
  }

  return binarySearch(arr, target, mid + 1, e);
}

const result = binarySearch(
    [  1,5,6,8,99,100, 201],
    201,
    0,
    [  1,5,6,8,99,100, 201].length - 1
);

console.log(result);