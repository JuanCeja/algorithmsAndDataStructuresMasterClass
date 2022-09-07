// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// samples

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Time Complexity - O(n)

// ===================================================================================

function findLongestSubstring(s){
    // make a set to see if current elements exist already
    let set = new Set();
    // left is beginning of our window and right is the end
    let left = 0;
    let right = 0;
    // this will keep track of our longest substring
    let maxSubstringLength = 0;

    // using while loop to go through our string
    while(right < s.length) {

        // check to see if current string value exists in our set
        if(!set.has(s[right])){

            // if it does not we add it to our set
            set.add(s[right]);

            // we compare if our maxSubstring length is greater then our current substring which is our set now
            maxSubstringLength = Math.max(maxSubstringLength, set.size);

            // we increment right and start our process all over
            right++
        } else {

            // if our current value already exists in our set we delete the value at left from our set and increment left up to make our new substring
            set.delete(s[left]);
            left++;
        }
    }
    // return our maxSubstringLength
    return maxSubstringLength;
};

console.log(findLongestSubstring('')) 
// 0
console.log(findLongestSubstring('rithmschool')) 
// 7
console.log(findLongestSubstring('thisisawesome')) 
// 6
console.log(findLongestSubstring('thecatinthehat')) 
// 7
console.log(findLongestSubstring('bbbbbb')) 
// 1
console.log(findLongestSubstring('longestsubstring')) 
// 8
console.log(findLongestSubstring('thisishowwedoit')) 
// 6