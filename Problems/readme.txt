=======================================================================================
=======================================================================================
How to empty an array in JavaScript?

var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
How could we empty the array above?

Answer
Method 1

    arrayList = [];
    Above code will set the variable arrayList to a new empty array. This is recommended if you don't have references to the original array arrayList anywhere else because It will actually create a new empty array. You should be careful with this way of empty the array, because if you have referenced this array from another variable, then the original reference array will remain unchanged, Only use this way if you have only referenced the array by its original variable arrayList.

    For Instance:

    var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
    var anotherArrayList = arrayList;  // Referenced arrayList by another variable
    arrayList = []; // Empty the array
    console.log(anotherArrayList); // Output ['a', 'b', 'c', 'd', 'e', 'f']
Method 2

    arrayList.length = 0;
    Above code will clear the existing array by setting its length to 0. This way of empty the array also update all the reference variable which pointing to the original array. This way of empty the array is useful when you want to update all the another reference variable which pointing to arrayList.

    For Instance:

    var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
    var anotherArrayList = arrayList;  // Referenced arrayList by another variable
    arrayList.length = 0; // Empty the array by setting length to 0
    console.log(anotherArrayList); // Output []
Method 3

    arrayList.splice(0, arrayList.length);
    Above implementation will also work perfectly. This way of empty the array will also update all the references of the original array.

    var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
    var anotherArrayList = arrayList;  // Referenced arrayList by another variable
    arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
    console.log(anotherArrayList); // Output []
Method 4

    while(arrayList.length) {
    arrayList.pop();
    }
    Above implementation can also empty the array. But not recommended to use often.

=======================================================================================
=======================================================================================

