// collectStrings

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

// ==========================================================

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings (obj) {
    // array that will hold our strings

    // loop through obj

    // if value of key is a string we push it into array

    // else if value of key is an obj typeOf we make our recursive call
    
    // return our array of strings
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
