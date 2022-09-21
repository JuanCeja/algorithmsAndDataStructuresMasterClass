// recursiveRange

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// =====================================================================================

function recursiveRange(num){
    // base case
    if(num === 0) return 0;

    // recursive call with different input
    return num + recursiveRange(num - 1);
};

console.log(recursiveRange(6))
// 21
console.log(recursiveRange(10))
// 55

// recRange(6)
//     6 + recRange(5)
//                 5 + recRange(4)
//                             4 + recRange(3)
//                                         3 + recRange(2)
//                                                     2 + recRange(1)
//                                                                 1 + recRange(0)
//                                                                         0

// recRange(6)
//     6 + 15
//         5 + 10
//             4 + 6
//                 3 + 3
//                     2 + 1
//                         1 + 0