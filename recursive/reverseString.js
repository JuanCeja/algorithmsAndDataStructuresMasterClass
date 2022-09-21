// reverse

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// =====================================================================================

function reverse(str) {
    // base case
    if(str.length <= 1) return str;

    // recursive call with different input
    return reverse(str.slice(1)) + str[0]
};

console.log(reverse('awesome'))
// output: 'emosewa'

console.log(reverse('rithmschool'))
// output: 'loohcsmhtir'
