/**
 * ? find the subarray sum equal to k
 */

/**
 * * 1. create a hashmap contains the sum frequency 
 * * 2. if the current sum - k exists inside map then subarray exists
 */

function findSubarraySumEqualsK( arr, k) {
    const sMap = {};

    sMap[0] = 1;

    let result = 0;
    let sum =0;

    for(let item of arr){
        sum = sum + item;

        if(sMap[sum - k] !== undefined) {
            result = result + sMap[sum - k];
        }

        sMap[sum] = sMap[sum] + 1 || 1;
    }
    return result;
}

const result = findSubarraySumEqualsK(
    [ 3, 9 , -2, 4, 1, -7, 2, 6, -5, 8, -3, -7, 6, 2, 1 ],
    5
)

console.log(result);

/*

arr  =>    3,     9 ,    -2,     4,     1,     -7,     2,     6,     -5,     8,     -3,     

-7,     6,      2,      1

sum => 0   3      12     10      14     15     8       10     16      11     19      16

9      15       17      18

map => 1 (3,1)  (12,1)  (10,1)  (14,1) (15,1) (8,1)   (10,2)  (16,1)  (11,1)  (19,1)  (16,2)

(9,1)  (15,2)   (17,1)   (18,1)

result  1 + 1 + 1 + 1 + 2 + 1  === 7 

*/
