// capitalizeWords

// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// =====================================================================
let words = ["i", "am", "learning", "recursion"];

function capitalizeWords(arr) {
    let newArray = [];

    // base case
    if(arr.length === 1) return arr[0].toUpperCase();

    // here we add our first element to our newArray capitalized
    newArray.push(arr[0].toUpperCase());

    // recursive call with different input
    // we concat to newArray so we dont lose our current elements and remake our recursive call on our sliced arr
    return newArray.concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
