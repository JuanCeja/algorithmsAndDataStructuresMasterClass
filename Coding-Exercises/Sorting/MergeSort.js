// Sorting Exercise - Merge Sort

// Given two sorted arrays, write a function called merge which accepts two SORTED arrays and returns a new array with both of the values from each array sorted.

// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

// As before, the function should default to sorting numbers in ascending order.If you pass in a comparator function as a third argument, this comparator is what will be used. (Note that the input arrays will always be sorted according to the comparator!)

// Also, do not use the built in .sort method! We're going to use this helper to implement a sort, so the helper itself shouldn't depend on a sort.

//     Examples

// var arr1 = [1, 3, 4, 5];
// var arr2 = [2, 4, 6, 8];
// merge(arr1, arr2) // [1,2,3,4,4,5,6,8]


// var arr3 = [-2, -1, 0, 4, 5, 6];
// var arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
// merge(arr3, arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

// var arr5 = [3, 4, 5]
// var arr6 = [1, 2]
// merge(arr5, arr6) // [1,2,3,4,5]

// var names = ["Bob", "Ethel", "Christine"]
// var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"]

// =================================================================================================================================================================================

//                                      ********* merge helper function ***********

function merge(arr1, arr2) {
    // create an empty array, take a look at the smallest values in each array input

    // while there are still values we haven't looked at 

        // if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array

        // if the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array

        // once we exhaust one array, push in all remaining values from the other array

    // return our results array
};

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
let arr3 = [-2, -1, 0, 4, 5, 6];
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
let arr5 = [3, 4, 5]
let arr6 = [1, 2]

console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]
console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
console.log(merge(arr5, arr6)); // [1,2,3,4,5]