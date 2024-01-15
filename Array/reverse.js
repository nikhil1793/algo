function reverse(arr) {
    for(let i=0; i< Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
}

const arr = [1,2,3,4,5];

reverse(arr);

console.log(arr);