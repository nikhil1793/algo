/**
 * parseInt is the Key here
 * parseInt("51-") = 51
 * parseInt("008") = 8
 */

function reverseInt(num){
    return parseInt( num
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
                    ) * Math.sign(num);
}

console.log(reverseInt(51));
console.log(reverseInt(-57));
console.log(reverseInt(500));