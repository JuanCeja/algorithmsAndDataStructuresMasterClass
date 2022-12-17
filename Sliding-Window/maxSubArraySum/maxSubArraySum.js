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
    // create variables to hold temp sum and max sum
    let maxSum = 0;
    let tempSum = 0;

    // base case if num is greater than our array length
    if(arr.length < num) return null;

    // adding our first elements and setting as our max sum
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    };

    // set tempSum to maxSum so we can compare later
    tempSum = maxSum;
    
    // loop through our array starting at our num element which we will start our sliding window now
    for(let i = num; i < arr.length; i++){

        // this subtracts our first element from our past window
        //                     vvvvvv 
        tempSum = tempSum - arr[i - num] + arr[i];
        //                                  ^ this adds our current element and makes new window


        // here we compare which is greater. which ever is greater becomes our new maxSum
        maxSum = Math.max(tempSum, maxSum);
    }

    // return our max sum after the loop finishes
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
