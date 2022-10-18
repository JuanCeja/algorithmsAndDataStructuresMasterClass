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

function mostDigits(nums) {
    let maxDigits = 0;
    
    for(let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
};
