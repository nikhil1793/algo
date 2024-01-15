/**
 * ? check if the array has pairs which are divisble by k
 * ? I/O - array
 * ? O/P - boolean
 */

/**
 * * make a frequency hash map which contains the remainder frequency
 * * if freqency of number n is m ---  n * m === (k - n) * m
 * * if remainder is 0 --- then frequency should be even
 * * if remainder is k/2 --- then frequency should be even
 */

function arrayPairDivisibleByK(arr, k){
    const fMap = {};

    for(let item of arr) {
        const rem = item % k;
        fMap[rem] = fMap[rem] + 1 || 1;
    }

    console.log(fMap);

    for(let item of arr) {
        const rem = item % k;

        if(rem === 0) {
            console.log(` if remainder is 0 --- then frequency should be even `);
            if(fMap[rem] % 2 !== 0) {
                return false;
            }
        } else if ( 2 * rem === k) {
            console.log(` if remainder is k/2 --- then frequency should be even `);
            if(fMap[rem] % 2 !== 0) {
                return false;
            }
        } else {
            console.log(` if freqency of number n is m ---  n * m === (k - n) * m `);
            const currentElementFrequency = fMap[rem];
            const alternateElemFrequency = fMap[k - rem];
            if(currentElementFrequency !== alternateElemFrequency) {
                return false;
            }
        }
    }

    return true;
}

const result = arrayPairDivisibleByK([ 12, 8, 24, 24, 2, 14, 15 , 5 ], 4);

console.log(result);

