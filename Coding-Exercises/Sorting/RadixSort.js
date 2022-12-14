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

// ****** Get Digit Count Helper Function ******
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// ****** Most Digits Helper Function ******
function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
};

function radixSort(arr) {
    let mostDigitsCount = mostDigits(arr);

    for (let i = 0; i < mostDigitsCount; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
};

console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])); // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]