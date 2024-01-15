/**
 * ? find the subarray sum divisible by k
 */

/**
 * * 1. create a hashmap contains the remainder frequency 
 * * 2. if the remainder is negative , then replace it with k - r in hashmap
 * * 3. ky - n === ky - n + k - k === k(y - 1) + (k - n)
 */

function findSubarraySumDivisbleByK(arr, k) {
    const fMap = {};
    let result = 0;

    fMap[0] = 1;

    let sum = 0;

    for(let item of arr) {
        sum = sum + item;

        let rem = sum % k;

        // ! handling the condition of negative remainder
        if(rem < 0) {
            rem = k + rem;
        }

        if(fMap[rem] !== undefined) {
            result = result + fMap[rem];
        }

        fMap[rem] = fMap[rem] + 1 || 1;
    }

    console.log(fMap);

    return result;
}

let result = findSubarraySumDivisbleByK(
    [ 2, -6, 3, 1, 2, 8, 2, 1],
    7
);

console.log(result);


// s = 0      2       -4      -1      0   2   10    12    13
// r = 0,2    2,2     3,2     6,2     0   2    3    5,1   6


// r = 1 + 1 + 1 + 1