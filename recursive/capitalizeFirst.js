// capitalizeFirst

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// =====================================================================

function capitalizeWords(array) {
    // create empty array
    let newArray = [];

    // basecase 
    if(array.length < 1) return newArray;

    newArray.push(array[0][0].toUpperCase() + array[0].slice(1));

    return newArray.concat(capitalizeWords(array.slice(1)));
}

console.log(capitalizeWords(["car", "taco", "banana"])); // ['Car','Taco','Banana']
