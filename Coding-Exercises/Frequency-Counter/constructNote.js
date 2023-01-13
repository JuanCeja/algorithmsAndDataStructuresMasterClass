// Frequency Counter - constructNote

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// ============================================================================================================================================================================================

function constructNote(message, letters) {
    let lettersFreq = {};
    let messageFreq = {};

    for (let char of message) {
        if(char in messageFreq) messageFreq[char]++;
        else messageFreq[char] = 1;
    }

    for (let char of letters) {
        if(char in lettersFreq) lettersFreq[char]++;
        else lettersFreq[char] = 1;
    }

    for(let char in messageFreq) {
        if(!(char in lettersFreq)) return false;
        else if(messageFreq[char] > lettersFreq[char]) return false;
    }

    return true;
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true