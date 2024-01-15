/**
 * ? find the longest subarray sum divisible by k
 */

/**
 * * 1. create a hashmap contains the remainder with lindex  { rem: index  }
 * * 2. if the remainder is negative , then replace it with k - r in hashmap
 * * 3. ky - n === ky - n + k - k === k(y - 1) + (k - n)
 */

function findLongestSubarrayWithSumDivibleByK(arr, k) {

    let subArrayLength = 0;
    const iMap = {};
    iMap[0] = -1;

    let sum = 0;

    for(let i=0; i < arr.length; i++) {
        sum = sum + arr[i];

        let rem = sum % k;

        if(rem < 0){
            rem = k + rem;
        }

        if(iMap[rem] !== undefined){
            let len = i - iMap[rem];
            subArrayLength = len > subArrayLength ? len : subArrayLength;
        } else {
            iMap[rem] = i;
        }
    }

    console.log(subArrayLength);
}

findLongestSubarrayWithSumDivibleByK(
    [ 2, -6, 3, 1, 2, 8, 2, 1],
    7
)

//  arr        2      -6        3         1       2        8        2      1
           
//  sum   0    2      -4       -1         0       2        10       12     13

//  map  -1  (2, 0)   (3, 1)   (6, 2)   (0, 3)    (2, 4)   (3, 5)   (5, 6)  (6, 7)

//  len   5


findLongestSubarrayWithSumDivibleByK(
    [  -3, -9, -4, 8, 5, 4, 2, 6  ],
    7
)

//  arr         -3         -9        -4         8        5        4        2       6
           
//  sum   0     -3         -12       -16        -8       -3       1        3       9

//  map (0,-1)  (4, 0)    (2, 1)    (5, 2)    (6, 3)    (4, 4)   (1, 5)   (3, 6)  (2, 7)

//  len   6

