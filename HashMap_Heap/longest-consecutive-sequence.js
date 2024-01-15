function longestConsecutiveSequence(arr){

    //* create a hasmap with key as number and value as boolean

    const map = {};

    for(let i of arr){
        map[i] = true;
    }

    /**
     * * this loop will makes all the intial point of the sequence as true and others false
     * * { 1: true, 2: false, 3: false, 5: true, 6: false, 8: true, 9: false, 10: false,   11: false, 12: false, 15: true} }
     */
    for(let i of arr){
        if(map[i - 1] !== undefined){
            map[i] = false;
        }
    }

    let longestSequenceStartingPoint = 0;
    let longestSequenceCount = 0;

    /**
     * * Summation of iteration of while loop running inside the for loop 
     * * will result into number of element in array
     * * Summation(iteration in while loop) === arr.length
     */


    const interation_in_while_loop = [];

    for(let i of arr){
        if(map[i] === true) {
            let tempCount = 1;
            while(map[i + tempCount] !== undefined){
                tempCount++;
            }

            interation_in_while_loop.push(tempCount);

            if(tempCount > longestSequenceCount){
                longestSequenceCount = tempCount;
                longestSequenceStartingPoint = i;
            }
        }
    }

    
    const summation = interation_in_while_loop.reduce((a, v) => a + v);
    console.log(`(iterations in while loop) = ${ interation_in_while_loop } `);
    console.log(`summation(iterations in while loop) = ${ summation } is equal to array length ${arr.length}`);
    console.log(`longestSequenceStartingPoint : ${longestSequenceStartingPoint}`);
    console.log(`longestSequenceCount : ${longestSequenceCount}`)

    for(let i = 0; i < longestSequenceCount; i++){
        console.log(longestSequenceStartingPoint);
        longestSequenceStartingPoint += 1;
    }

}

/**
 * * Complexity : O(n)
 */

longestConsecutiveSequence(
    [ 10, 5 , 9, 11, 1, 8, 6, 15, 3, 12, 2 ]
)

// 8  9  10  11  12