// flatten

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// ===========================================================

function flatten(arr) {
    // create our empty array to fill
    let flattened = [];

    // loop through arr
    for(let i = 0; i < arr.length; i++){

        // current iteration variable
        let element = arr[i];
        
        // if element is an array we recall our recursive call with different input
        // else we push our element to our empty flattened array

        Array.isArray(element) ? flattened = flattened.concat(flatten(element)) : flattened.push(element);
        
    }

    // return our flattened array
    return flattened;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]