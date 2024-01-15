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
    const merge_sort_fn = (arr, s, e) => {
      if (e - s === 1) {
        return;
      }
  
      let mid = Math.floor(s + (e - s)/2);
  
      merge_sort_fn(arr, s, mid);
      merge_sort_fn(arr, mid, e);
      merge(arr, s, mid, e);
    }
    merge_sort_fn(arr,0, arr.length);
}

function merge(arr,s, m, e) {
  const result = [];
  let i = s;
  let j = m;
  while (i < m && j < e) {
    if (arr[i] < arr[j]) {
      result.push(arr[i]);
      i++;
    } else {
      result.push(arr[j]);
      j++;
    }
  }

  //* it may be possible that one of the array is not completed

  while (i < m) {
    result.push(arr[i]);
    i++;
  }

  while (j < e) {
    result.push(arr[j]);
    j++;
  }

  for(let k=0; k< result.length; k++) {
    arr[s + k] = result[k];
  }
}

var arr = [5, 4, 3, 2, 1];

mergeSort(arr);

console.log(arr);
