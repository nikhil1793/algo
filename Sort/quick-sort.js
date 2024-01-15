/**
 * * QUICK SORT
 * * uses the concept of pivot element - idealy we take pivot as middle elemnt
 * * element presents left side of pivot elemnt should be lesser
 * * elemnt presents right side of pivot elemnt should be greater
 * * on each recursion call we will put the pivot element at its right index
 * * BEST CASE TIME COMPLEXITY : O(nlogn)
 * * WORST CASE TIME COMPLEXITY : O(n2)
 * * SPACE : O(1)
 */

function quickSort(arr) {
  /**
   * * used for sorting the portion of the array
   * @param {*} arr
   * @param {*} low - start point of the array
   * @param {*} high - end point of the array
   */
  const quick_sort_fn = (arr, low, high) => {
    if (low >= high) {
      return;
    }

    let start = low;
    let end = high;
    let mid = Math.floor(start + (end - start) / 2);
    let pivot = arr[mid];

    while (start <= end) {
      /**
       * * try to find the voilation point
       * * point where number[start] > pivot
       * * point where number[end] < pivot
       * * if voilation point found then we will swap the values
       * * also a reason if the array is already sorted it will not swap
       */
      while(arr[start] < pivot) {
        start++;
      }

      while(arr[end] > pivot) {
        end--;
      }

      if (start <= end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }

    //* now my pivot is at correct index, sort the two halves now
    quick_sort_fn(arr, low, end);
    quick_sort_fn(arr, start, high);
  };

  quick_sort_fn(arr, 0, arr.length -1);
}

let arr = [10,80,30,90,40,50,70];

quickSort(arr);

console.log(arr);
