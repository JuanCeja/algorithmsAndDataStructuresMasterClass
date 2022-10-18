// ======================= GET DIGIT HELPER FUNCTION =============================

// this returns us the number at the given position
// for example: if we wanted the 3rd number in 18765 we would get 7

function getDigit(num, i) {    
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// ======================= DIGIT COUNT HELPER FUNCTION =============================

// this function will return the length of our number
// for example: 1234 will return us 4

function digitCount(num) {    
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// ======================= LONGEST DIGIT HELPER FUNCTION =============================

// this function will return us the length of the longest/greatest number in an array
// for example: [1, 2, 23, 456, 789, 1010] will return us 4

function mostDigits(arr) {
    let maxDigits = 0;
    
    for(let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
};

// ============================== RADIX SORT FUNCTION ====================================

function radixSort(arr){

    // figure our how many digits the largest number has 
    
    // loop from k=0 up to this largest number of digits

    // for each iteration of the loop:
        
        // create buckets for each digit(0 to 9)
        // place each number in the corresponding bucket based on its kth digit

    // replace our existing array with values in our buckets, starting with 0 and going up to 9
    
    // return our sorted list
};
