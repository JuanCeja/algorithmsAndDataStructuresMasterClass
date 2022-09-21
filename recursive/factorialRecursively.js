// 1. BASE CASE

// We need a base case. This is the condition when the recursion ends. This is the most important concept to understand.

// 2. DIFFERENT INPUT

// We want to call the same function over and over but each time with a different piece of data. You don't want to keep using the same data because we will never get anywhere. So we change our data and run our data again. 

// FACTORIAL

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

// ===================================================================================

function factorial (num) {
    // base case
    if(num === 2) return 2;

    // recursive call with different input
    return num * factorial(num - 1);
};

console.log(factorial(3));
console.log(factorial(4));

// factorial(4)
//   return 4 * factorial(3)
//                return 3 * factorial(2)
//                              return 2

// factorial(4) = 24
//   return 4 * 6
//                return 3 * 2
//                              return 2
