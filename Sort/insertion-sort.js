/**
 * * Insertion Sort - Sort portion of array in iteration
 * * Time Complexity :
 * ? Best Case : O(n)
 * ? Worst Case: O(n2)
 * * Space Complexity
 * ? O(1)
 * * why ?
 * ? Adaptive in nature - number of step reduced if array alredy sorted
 * ? Number of swaps reduced as compared to quick sort
 * ? stabe in nature
 * ? used for smaller value of n and array is partially sorted - This is why
 * ? it takes part in hybrid sorting algorithm.
 */

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] > arr[j - 1]) {
        break;
      }
      //* swap the elements
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  console.log(`INSERTION SORT`, arr);
}

insertionSort([5, 4, 1, 3, 2]);
insertionSort([1]);
insertionSort([]);
insertionSort([5, -4, 1, 0, 2]);

function insertionSortPractice(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] > arr[j - 1]) {
        break;
      }
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}

var res = insertionSortPractice([5, -4, 1, 0, 2]);
console.log(res);
