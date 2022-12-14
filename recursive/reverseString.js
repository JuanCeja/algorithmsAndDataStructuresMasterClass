// reverse

// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// =====================================================================================

function reverse(str) {
    // base case
    if(str.length <= 1) return str;

    // other base case method
    // if(str.length === 0) return '';

    // recursive call with different input
    return reverse(str.slice(1)) + str[0]
};

console.log(reverse('awesome'))
// output: 'emosewa'

console.log(reverse('rithmschool'))
// output: 'loohcsmhtir'

// rev(happy) = yppah
//     rev(appy) + h => yppah
//         rev(ppy) + a => yppa
//             rev(py) + p => ypp
//                 rev(y) + p => yp
//                     rev('') + y => y
//                         rev('')
