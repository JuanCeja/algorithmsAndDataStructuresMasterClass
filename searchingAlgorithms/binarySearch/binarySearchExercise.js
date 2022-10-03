// Binary Search Exercise

// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// binarySearch([1, 2, 3, 4, 5], 2); // 1
// binarySearch([1, 2, 3, 4, 5], 3); // 2
// binarySearch([1, 2, 3, 4, 5], 5); // 4
// binarySearch([1, 2, 3, 4, 5], 6); // -1
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,99,],10); // 2
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,99,],95); // 16
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,99,],100); // -1

// =====================================================================

function binarySearch(arr, value) {
    // create our left and right variables
    let left = 0;
    let right = arr.length - 1;

    // create our while loop 
    while(left <= right) {
        
        // create our mid point
        let mid = Math.floor((left + right) / 2);

        // if mid is equal to value return index
        if(value === arr[mid]) return mid;

        // if value is greater than mid, me make left our mid
        else if(value > arr[mid]) {
            left = mid + 1;
        } 

        // if value is less than mid, me make right our mid
        else if(value < arr[mid]) {
            right = mid;
        }
    }

    // if while loop finishes without returning a value return -1
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,99,],10)); // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,99,],95)); // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,99,],100)); // -1