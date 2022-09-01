// Multiple Pointers - isSubsequence


// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world');  true
// isSubsequence('sing', 'sting');  true
// isSubsequence('abc', 'abracadabra');  true
// isSubsequence('abc', 'acb');  false (order matters)

// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

//=============================================================================================================

function isSubsequence(str1, str2) {
    // create pointer and empty string variable
    let pointer = 0;
    let testString = "";

    // loop through second string 
    for(let val in str2) {

        // compare str2 element to str1. if a match push to element to empty string
        if(str2[val] === str1[pointer]) {
            testString += str2[val];
            
            // move pointer up 
            pointer++;
        }
    }

    // compare str1 to our string variable if matches return true
    // else return false
    if(testString === str1) {
        return true
    } else return false;
};

console.log(isSubsequence('hello', 'hello world')); // true

console.log(isSubsequence('sing', 'sting')); // true

console.log(isSubsequence('abc', 'abracadabra')); // true

console.log(isSubsequence('abc', 'acb')); // false (order matters)