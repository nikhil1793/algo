/**
 * Approach:I
 * Complexity : O(n)
 */
function reverseString1(str){
    return str.split('').reverse().join('');
}
console.log(reverseString1('Hello'));

/**
 * Approach:II
 * Complexity : O(n)
 */
function reverseString2(str){
    const l = str.length-1;
    let result = '';
    for(var i=l;i>=0;i--){
        result =  result + str.charAt(i);
    }
    return result;
}
console.log(reverseString2('Hello2'));

/**
 * Approach:III
 */
function reverseString3(str){
    let result = '';
    for(var character of str){
        result = character +  result;
    }
    return result;
}
console.log(reverseString3('Used For of'));

/**
 * Approach:IV
 * Usig Reduce Helper Mrthod
 */
function reverseString4(str){
    return str.split('').reduce((reversed,character)=>{
        return character + reversed;
    },'');
}

console.log(reverseString4('reduce'));