// productOfArray

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) output 6
// productOfArray([1,2,3,10]) output 60

// =====================================================================================

function productOfArray(arr) {
    // base case
    if(arr.length === 0) return 1;

    // recursive call with different input
    return arr[0] * productOfArray(arr.slice(1))
};


console.log(productOfArray([1,2,3]))
// output 6

console.log(productOfArray([1,2,3,10]))
// output 60

// ===============  STEP BY STEP ===============

// pof([1,2,3,10])
//         1 * pof([2,3,10])
//                     2 * pof([3,10])
//                               3 * pof([10])
//                                         10 * pof([])
//                                                 1

// pof([1,2,3,10]) => 60
//         1 * 60
//                 2 * 30
//                           3 * 10
//                                     10 * 1
//                                         1