// isPalindrome

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// ===========================================================

function isPalindrome(str) {
    // base case
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    
    // recursive call with different input
    if(str[0] === str[str.length-1]){
        return isPalindrome(str.slice(1,-1))
    }

    // return false immeadiately if elements do not match in above if statement
    return false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false