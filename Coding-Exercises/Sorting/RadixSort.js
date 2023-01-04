// Radix Sort

// Finally, you're ready to implement Radix Sort! Write a function called radixSort  which accepts an array of numbers and sorts them in ascending order.

// You'll need to make use of the helper functions from the previous exercises here. Good luck!

// Examples

// radixSort([8, 6, 1, 12]); // [1, 6, 8, 12]
// radixSort([10, 100, 1, 1000, 10000000]); // [1, 10, 100, 1000, 10000000]
// radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]); 
// // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]

// ===============================================================================================================================================================================================

// ****** Get Digit Helper Function ******
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// ****** Get Digit Count Function ******
function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

console.log(digitCount(1)); // 1
console.log(digitCount(9)); // 1
console.log(digitCount(25)); // 2
console.log(digitCount(314)); // 3
console.log(digitCount(1234)); // 4
console.log(digitCount(77777)); // 5


// console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
// console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
// console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]));
// // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]