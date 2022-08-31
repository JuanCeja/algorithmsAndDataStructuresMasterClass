// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// ============================================================================================================

function areThereDuplicates(...arguments) {
    // create object to hold indices
    let frequencyCounter = {};

    // loop through arguments to fill object
    for(let val in arguments) {
        frequencyCounter[arguments[val]] = (frequencyCounter[arguments[val]] || 0) + 1;
    }

    // loop through object and if any key has value greater than 1 return true
    for(let key in frequencyCounter) {
        if(frequencyCounter[key] > 1) return true;
    }
    // else return false
    return false;
};

console.log(areThereDuplicates(1, 2, 3));
// false

console.log(areThereDuplicates(1, 2, 2));
// true

console.log(areThereDuplicates('a', 'b', 'c', 'a'));
// true

console.log(areThereDuplicates('a', 'b', 'c', 'ass', 'd', 'z'));
// true