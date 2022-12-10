// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// sample 1 :
// [1,1,1,1,1,2] returns 2

// sample 2 :
// [1,2,3,4,4,4,7,7,12,12,13] returns 7

// sample 3 :
// [] returns 0

// sample 4 :
// [-2, -1, -1, 0, 1] returns 4

// =========================================================================

let arr1 = [1, 1, 1, 1, 1, 2];
let arr2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
let arr3 = [];
let arr4 = [-2, -1, -1, 0, 1];

var countUniqueValues = function (arr) {
    // create a pointer and counter variable
    let pointer = 0;
    let counter = 1;

    // basecase for an empty array
    if(arr.length === 0) return 0;

    // loop through array and look for different numbers. move our pointer to new value and increase counter
    for(let i = 0; i < arr.length; i++) {
        if(arr[pointer] !== arr[i]) {
            counter++;
            pointer = i;
        }
    }

    // return our counter
    return counter;
};

console.log(countUniqueValues(arr1));
// 2

console.log(countUniqueValues(arr2));
// 7

console.log(countUniqueValues(arr3));
// 0

console.log(countUniqueValues(arr4));
// 4
