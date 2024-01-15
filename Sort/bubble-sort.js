/**
 * * Bubble Sort
 * * Time Complexity : 
 * ? Best Case : O(n)
 * ? Worst Case: O(n2)
 * * Space Complexity
 * ? O(1)
 * * Stable / Order Maintainance : Yes
 * * good for partially sorted array
 */

function bubbleSort(arr){
    let swapped = false;
    //* loop for passes
    for(let pass=0; pass < arr.length-1; pass++){

        //* reset swapped for each pass
        swapped = false;

        console.log(`pass - ${pass}`);

        //* inner loop for shifting biggest elemnt to last correct
        //* index for each pass
        for(let j=1; j <= arr.length - pass -1; j++){
            if(arr[j] < arr[j-1]){
                //* swap
                swapped = true;
                const temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            }
        }

        if(!swapped) break;
    }

    console.log(arr);
}


const arr = [ 5,4,3,2,1 ];

bubbleSort(arr);
