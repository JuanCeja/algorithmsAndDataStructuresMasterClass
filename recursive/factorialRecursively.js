// 1. BASE CASE

// We need a base case. This is the condition when the recursion ends. This is the most important concept to understand.

// 2. DIFFERENT INPUT

// We want to call the same function over and over but each time with a different piece of data. You don't want to keep using the same data because we will never get anywhere. So we change our data and run our data again. 

// ===================================================================================

function factorialRecursively (num) {
    // base case
    if(num === 2) return 2;

    // different input
    return num * factorialRecursively(num - 1);
};

console.log(factorialRecursively(5));