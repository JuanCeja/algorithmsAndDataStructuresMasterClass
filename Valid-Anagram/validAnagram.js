// given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

// sample 1: ' ' => ' ' true
// sample 2: aaz => zza false
// sample 3: 'anagram' => 'nagaram' true
// sample 4: 'rat' => 'car' false
// sample 5: 'qwerty' => 'qeywrt' true
// sample 6: 'texttwisttime' => 'timetwisttext' true
// sample 7: 'awesome' => 'awesom' false

// =========================================================================

let string1 = ' ';
let string2 = ' ';

let string3 = 'aaz';
let string4 = 'zza';

let string5 = 'anagram';
let string6 = 'nagaram';

let string7 = 'rat';
let string8 = 'car';

let string9 = 'awesome';
let string10 = 'awesom';

let string11 = 'qwerty';
let string12 = 'qeywrt';

let string13 = 'texttwisttime';
let string14 = 'timetwisttext';

var validAnagram = function(s1, s2) {
    // create 2 objects to store our character counts
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // create base case if strings aren't same size
    if(s1.length !== s2.length) return false;

    // loop through both strings to make our objects 
    for(let char of s1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for(let char of s2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
    
    // compare counts of each char to determine wether true or false
    for(let key in frequencyCounter1) {
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false
    }

    return true;
};

console.log(validAnagram(string1, string2));
// true

console.log(validAnagram(string3, string4));
// false

console.log(validAnagram(string5, string6));
// true

console.log(validAnagram(string7, string8));
// false

console.log(validAnagram(string9, string10));
// false

console.log(validAnagram(string11, string12));
// true

console.log(validAnagram(string13, string14));
// true