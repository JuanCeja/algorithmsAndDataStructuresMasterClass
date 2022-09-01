// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

// ============================================================================================================

function maxSubarraySum(arr, num) {
    // create variable to hold max sum
    let maxSum = 0;

    // loop through arr to add max sum of num length
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    // create temp element
    let temp = maxSum;
    
    // loop through arr using our window
    for(let i = num; i < arr.length; i++){
        
        // add our current element and subtract our first element
        temp += arr[i] - arr[i-num];

        // which ever is greater from temp sum or max sum will be our max sum
        maxSum = Math.max(temp, maxSum);
    }

    // return max sum
    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
