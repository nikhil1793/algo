/**
 * * Selection Sorting
 * * Time Complexity : 
 * ? Best Case : O(n2)
 * ? Worst Case: O(n2)
 * * Space Complexity
 * ? O(1)
 * * Stable / Order Maintainance : No
 * * Good for smaller list
 */


function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        findMaxAandSwap(arr, arr.length - i -1);
    }
    console.log(arr);
}


function findMaxAandSwap(arr, endEndex) {
    //* find max item of the array
    let maxIndex = 0;
    for(let i=0; i< endEndex; i++){
        if(arr[i] > arr[maxIndex]){
            maxIndex = i;
        }
    }

    //* swap the max item with the correct index
    const temp = arr[endEndex];
    arr[endEndex] = arr[maxIndex];
    arr[maxIndex] = temp;
}

selectionSort([5,4,1,3,2]);
selectionSort([1]);
selectionSort([]);
selectionSort([5,-4,1,0,2]);


function selectionSortDescPractice(arr){

    for(i=0; i<arr.length - 1; i++){
        var lastIndex = arr.length - i - 1;
        var maxIndex = findMinIndex(arr, 0, lastIndex);

        // swap
        var temp = arr[maxIndex];
        arr[maxIndex] = arr[lastIndex];
        arr[lastIndex] = temp;
    }
    return arr;
}

function findMinIndex(arr, start, end) {
    var min = start;
    for(let i = start; i<= end; i++){
        if(arr[i] < arr[min]){
            min = i;
        }
    }
    return min;
}

const descSort = selectionSortDescPractice(
    [1,2,3,4,5]
);

console.log('desc',descSort);

