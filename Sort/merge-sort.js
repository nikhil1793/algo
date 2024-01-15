/**
 * * split the array into half part and sort them and merge
 * * merge them by comaring the 2 arrays index wise
 * * at each level , n elements are getting merged - n comparisons
 * * how many levels = N + N/2 + N/4 + ..... + N/pow(2,k)
 * * 1 = N/pow(2,k)  => pow(2,k) = N => klog2 = logN => k = logN
 * * no. of levels = logN
 * * Time complexity = N compariosn * logN => NLogN
 */

function mergeSort(arr) {
    if (arr.length === 1) {
      return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(first, second) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      result.push(first[i]);
      i++;
    } else {
      result.push(second[j]);
      j++;
    }
  }

  //* it may be possible that one of the array is not completed

  while (i < first.length) {
    result.push(first[i]);
    i++;
  }

  while (j < second.length) {
    result.push(second[j]);
    j++;
  }

  return result;
}

var arr = [5, 4, 3, 2, 1];

const result = mergeSort(arr);

console.log(result);
