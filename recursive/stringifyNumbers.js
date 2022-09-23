// stringifyNumbers

// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// =====================================================================


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj){
    // empty object variable
    let newObj = {};

    // loop through our obj
    for(let key in obj) {

        // if the value of our key is a number we convert it to a string
        if(typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();

            // if our valur is an obj and not an array we make our recursive call 
        } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {

            // we add our new key value pair to our new obj and make our recursive call
            newObj[key] = stringifyNumbers(obj[key]);

        } else {
            // if it does not meet any previous statements we pass that value to our newObj
            newObj[key] = obj[key];
        }
    }

    // return our obj
    return newObj;
};

console.log(stringifyNumbers(obj));

// output

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
