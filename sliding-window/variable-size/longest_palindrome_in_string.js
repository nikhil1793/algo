function findMaxPalindrome(str) {

    let i = 0;
    let j = 0;

    let temp = '';
    let longest = 0;
    let result = '';

    while (j < str.length) {
        // calculation
         temp = temp + str[j];

         if(!isPalindrome(temp)) {
             j++;
         } else {
             if(j - i + 1 > longest){
                 result = str.substring(i, j + 1);
             }
             
             longest = Math.max(temp.length, j - i + 1);
             // result = temp.length >= longest ?  str.substring(i, j + 1) : result;
             temp = temp.substring(1,temp.length);

             i++;
             j++;
         }
    }

    return result;

}

function isPalindrome(a) {
    if(a.length === 1) return false;
    return a === a.split('').reverse().join('');
}

findMaxPalindrome('ababc');
