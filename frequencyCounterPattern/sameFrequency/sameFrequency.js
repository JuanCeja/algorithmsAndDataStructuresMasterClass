// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281)  true
// sameFrequency(34,14)  false
// sameFrequency(3589578, 5879385)  true
// sameFrequency(22,222)  false

// ============================================================================================================
let int1 = 182;
let int2 = 281;

let int3 = 34;
let int4 = 14;

let int5 = 3589578;
let int6 = 5879385;

let int7 = 22;
let int8 = 222;

function sameFrequency(int1, int2) {
    // create 2 objects to keep track of indices
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // turn integers into strings
    let str1 = int1.toString();
    let str2 = int2.toString();

    // loop through both strings to fill objects
    for(let i = 0; i < str1.length; i++) {
        frequencyCounter1[str1[i]] = (frequencyCounter1[str1[i]] || 0) + 1;
    };

    for(let i = 0; i < str2.length; i++) {
        frequencyCounter2[str2[i]] = (frequencyCounter2[str2[i]] || 0) + 1;
    };

    // loop thorough frequencyCounter1 and compare to frequencyCounter2 if indices do not match return false
    

    // else return true 
};

// console.log(sameFrequency(int1, int2));
// output: true

// console.log(sameFrequency(int3, int4));
// output: false

console.log(sameFrequency(int5, int6));
// output: true

// console.log(sameFrequency(int7, int9));
// output: false
