// write a function called 'same', which accepts 2 arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// sample: [1,2,3] => [4,1,9] true
// sample: [1,2,3] => [1,9] false
// sample: [1,2,1] => [4,4,1] false (must be same frequency)

// =======================================================================================================

let arr1 = [1,2,3];
let arr2 = [4,1,9];

let arr3 = [1,2,3];
let arr4 = [1,9]

let arr5 = [1,2,1];
let arr6 = [4,4,1];

var same = function(arr1, arr2) {
    // basecase. if lengths do not equal return false immediately 
    if(arr1.length !== arr2.length) return false;

    // loop through first array
    for (let i = 0; i < arr1.length; i++){

        // create variable to compare and check if the squared value exists
        let correctIndex = arr2.indexOf(arr1[i] ** 2);

        // we return false becuase value does not exist
        if(correctIndex === -1) return false;

        // remove the value once we know it exists and proceed to our next iteration in the loop
        arr2.splice(correctIndex, 1);
    }

    // return if we never hit false in our loop
    return true;

}

console.log(same(arr1, arr2));
// true

console.log(same(arr3, arr4));
// false

console.log(same(arr5, arr6));
// false