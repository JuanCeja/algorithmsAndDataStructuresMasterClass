// capitalizeFirst

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// =====================================================================

function capitalizeWords(array) {
    // create empty array
    let newArray = [];

    // basecase 
    if(array.length < 1) return newArray;

    // here capitalize the very first letter of the element
    // then we add the remaining letters of the word to the capitalized letter
    // then we push to our new array
    newArray.push(array[0][0].toUpperCase() + array[0].slice(1));

    // we concat so we dont lose our previous newArray elements. 
    // we then make our recursive call with our new input
    return newArray.concat(capitalizeWords(array.slice(1)));
}

console.log(capitalizeWords(["car", "taco", "banana"])); // ['Car','Taco','Banana']
