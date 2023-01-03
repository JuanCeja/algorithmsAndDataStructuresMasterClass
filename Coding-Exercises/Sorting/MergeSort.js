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

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

let moarKittyData = [{
    name: "LilBub",
    age: 7
}, {
    name: "Garfield",
    age: 40
}, {
    name: "Heathcliff",
    age: 45
}, {
    name: "Blue",
    age: 1
}, {
    name: "Grumpy",
    age: 6
}];

function strComp(a, b) {
    if (a < b) { return -1; }
    else if (a > b) { return 1; }
    return 0;
}

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

function mergeSort(arr, comparator) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid), comparator);
    let right = mergeSort(arr.slice(mid), comparator);
    return merge(left, right, comparator);
}

console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order