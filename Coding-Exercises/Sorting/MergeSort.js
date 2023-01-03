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

function merge(arr1, arr2, comparator) {
    let i = 0;
    let j = 0;
    let sortedArr = [];
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    }
    while (i < arr1.length && j < arr2.length) {
        if (comparator(arr1[i], arr2[j]) <= 0) {
            sortedArr.push(arr1[i]);
            i++;
        } else {
            sortedArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        sortedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        sortedArr.push(arr2[j]);
        j++;
    }
    return sortedArr;
};

function stringLengthComparator(str1, str2) {
    return str1.length - str2.length;
};


//                                      ********* recursive merge sort ***********

function mergeSort(arr) {
    // break up the array into halves until you have arrays that are empty or have one element

    // once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array

    // once the array has been merged back together, return the merged (and sorted!) array
};