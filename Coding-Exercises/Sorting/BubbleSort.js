// Bubble Sort

// ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.

// The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

// The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

// Bubble sort is an O(n^2) algorithm.

// bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// bubbleSort([1, 2, 3]); // [1, 2, 3]
// bubbleSort([]);

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strComp(a, b) {
//     if (a < b) { return -1; }
//     else if (a > b) { return 1; }
//     return 0;
// }

// bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

// var moarKittyData = [{
//     name: "LilBub",
//     age: 7
// }, {
//     name: "Garfield",
//     age: 40
// }, {
//     name: "Heathcliff",
//     age: 45
// }, {
//     name: "Blue",
//     age: 1
// }, {
//     name: "Grumpy",
//     age: 6
// }];

// function oldestToYoungest(a, b) {
//     return b.age - a.age;
// }

// bubbleSort(moarKittyData, oldestToYoungest); // sorted by age in descending order

// ===============================================================================================================================================================================================================================

function bubbleSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (v1, v2) => {
            return v1 - v2;
        }
    }
    let end = arr.length;
    let swap = true;
    while (end > 0 && swap) {
        swap = false;
        for (let i = 0; i < end - 1; i++) {
            if (comparator(arr[i], arr[i + 1]) > 0) {
                let tmp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tmp;
                swap = true;
            }
        }
        end--;
    }
    return arr;
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]