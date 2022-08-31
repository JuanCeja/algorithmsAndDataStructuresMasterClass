// write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// let arr1 =  [1,2,5,2,8,1,5]
// let num1 = 2;
// output = 10

// let arr2 =  [1,2,5,2,8,1,5]
// let num2 = 4;
// output = 17

// let arr3 =  [4,2,1,6]
// let num3 = 1;
// output = 6

// let arr4 =  [4,2,1,6,2]
// let num4 = 4;
// output = 13

// let arr5 =  []
// let num5 = 4;
// output = null

// =================================================================================================================

let arr1 = [1, 2, 5, 2, 8, 1, 5];
let num1 = 2;

let arr2 = [1, 2, 5, 2, 8, 1, 5];
let num2 = 4;

let arr3 = [4, 2, 1, 6];
let num3 = 1;

let arr4 = [4, 2, 1, 6, 2];
let num4 = 4;

let arr5 = [];
let num5 = 4;

var maxSubarraySum = function (arr, num) {
    // if num > arr length return num. this is our basecase
    if(num > arr.length) return null;

    // create variable max to keep track of max sum
    let maxSum = -Infinity;

    // loop through our arr and then run another loop to add the values of num length
    for( let i = 0; i < arr.length - num + 1; i++){

        // create a temp value to compare to max
        let temp = 0;

        // run another loop to add the values
        for(let j = 0; j < num; j++){
            temp += arr[i + j];

            // if our values are greater than our max we re assign max
            maxSum = Math.max(temp, maxSum);
        }

    }
    // return max 
    return maxSum;
};

console.log(maxSubarraySum(arr1, num1));
// output : 10

console.log(maxSubarraySum(arr2, num2));
// output : 17

console.log(maxSubarraySum(arr3, num3));
// output : 6

console.log(maxSubarraySum(arr4, num4));
// output : 13

console.log(maxSubarraySum(arr5, num5));
// output : null
