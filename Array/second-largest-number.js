
/**
 * * O(n) - find largest item
 * * O(n) - find second largest
 * * Timecomplexity : O(2n)
 * @param {*} arr 
 * @returns 
 */
function secondLargestNumber_bruteForce(arr) {

    const largest = getLargest(arr);
    let secondLargest = arr[0];

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

function getLargest(arr) {
    let l = arr[0];

    for(let i=1; i< arr.length; i++) {
        if(arr[i] > l) {
            l = arr[i];
        }
    }

    return l;
}

/**
 * * OPTIMAL - O(n)
 * @param {*} arr 
 * @returns 
 */
function secondLargestNumber(arr){
    let largest = arr[0];
    let secondLargest = -Infinity;

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const arr = [2,3,4,6,8,19, 11, 15, 21];
console.log(secondLargestNumber(arr));