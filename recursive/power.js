// 1. BASE CASE

// We need a base case. This is the condition when the recursion ends. This is the most important concept to understand.

// 2. DIFFERENT INPUT

// We want to call the same function over and over but each time with a different piece of data. You don't want to keep using the same data because we will never get anywhere. So we change our data and run our data again. 

// ===================================================================================

function power(base, exponent){
    // base case
    if(exponent === 0) return 1;

    // different input
    return base * power(base, exponent - 1);
};

console.log(power(2,0));
// output 1
console.log(power(2,2));
// output 4
console.log(power(2,4));
// output 16

// power(2,4)
//         2 * power(2, 3)
//                 2 * power(2, 2)
//                             2 * power(2,1)
//                                        2 * power(2,0)
//                                                 1


