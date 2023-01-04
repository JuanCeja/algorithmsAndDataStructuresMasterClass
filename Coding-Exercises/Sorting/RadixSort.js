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
function getDigit(num, place) {
    
};

console.log(getDigit(12345, 0)) // 5
console.log(getDigit(12345, 1)) // 4
console.log(getDigit(12345, 2)) // 3
console.log(getDigit(12345, 3)) // 2
console.log(getDigit(12345, 4)) // 1
console.log(getDigit(12345, 5)) // 0

// console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
// console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
// console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])); 
// // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]