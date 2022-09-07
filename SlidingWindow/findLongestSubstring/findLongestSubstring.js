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
    let set = new Set();
    let left = 0;
    let right = 0;
    let maxSubstringLength = 0;
    while(right < s.length) {
        if(!set.has(s[right])){
            set.add(s[right]);
            maxSubstringLength = Math.max(maxSubstringLength, set.size);
            right++
        } else {
            set.delete(s[left]);
            left++;
        }
    }
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