// 1. BASE CASE

// We need a base case. This is the condition when the recursion ends. This is the most important concept to understand.

// 2. DIFFERENT INPUT

// We want to call the same function over and over but each time with a different piece of data. You don't want to keep using the same data because we will never get anywhere. So we change our data and run our data again. 

// ===================================================================================

function sumRange(num) {
    // base case 
    if(num === 1) return 1;

    // recursive call with different input
    return num + sumRange(num - 1);
};

console.log(sumRange(4));

// sumRange(4)
//   return 4 + sumRange(3)
//                return 3 + sumRange(2)
//                              return 2 + sumRange(1)
//                                           return 1

// sumRange(4)
//   return 4 + 6
//                return 3 + 3
//                              return 2 + 1
//                                           return 1

