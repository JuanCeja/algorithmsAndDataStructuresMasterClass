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
    
    let max = 0;
    let begin = 0;
    let set = new Set();

    for(let end = 0; end < s.length; end++){

        let char = s[end];

        while(set.has(char)) {
            set.delete(s[begin]);
            begin++;
        }
        set.add(char);
        max = Math.max(max, end - begin + 1);
    }
    return max;
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