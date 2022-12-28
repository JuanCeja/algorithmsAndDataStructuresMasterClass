// Divide and Conquer - sortedFrequency

// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4 
// sortedFrequency([1,1,2,2,2,2,3],3) // 1 
// sortedFrequency([1,1,2,2,2,2,3],1) // 2 
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)

// ===========================================================================================================================================================================

function sortedFrequency(arr, number) {
    let left = 0;
    let right = arr.length - 1;
    let newArray;

    while(left < right) {
        if(arr[left] < number) left++;
        if(arr[right] > number) right--;
        if(arr[left] === number && arr[right] === number) return (right - left) + 1;
    };

    return -1;
};


console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)) // 4 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)) // 1 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)) // 2 
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)) // -1
