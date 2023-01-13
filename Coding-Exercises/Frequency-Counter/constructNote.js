// Frequency Counter - constructNote

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// ============================================================================================================================================================================================

function constructNote(letters, message) {
    // create 2 objects to compare at the end
    let lettersObj = {};
    let messageObj = {};

    // loop through both strings to create the objects
    for (let i = 0; i < letters.length; i++) {
        if(!lettersObj[letters[i]]) lettersObj[letters[i]] = 1;
        else lettersObj[letters[i]]++;
    }

    for (let j = 0; j < message.length; j++) {
        if(!messageObj[message[j]]) messageObj[message[j]] = 1;
        else messageObj[message[j]]++;
    }

    // loop through one of the objects and compare the values to the other object
    for (const value in lettersObj) {
        // if the values dont match return false
        if(lettersObj[value] !== messageObj[value]) return false;
    }


    // return true
    return true;
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true