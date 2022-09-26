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
    let stringsArray = [];

    // loop through obj
    for(let key in obj) {

        // if value of key is a string we push it into array
        if(typeof obj[key] === "string") {
            stringsArray.push(obj[key]);

        } else if(typeof obj[key] === "object"){
            // else if value of key is an obj typeOf we make our recursive call

            // we concat because we dont want to lose our data in our current array. once we make our recursion call stringsArray will be an empty array again so we concat to keep our previous data. 
            
            return stringsArray.concat(collectStrings(obj[key]));
        }
    };

    // return our array of strings
    return stringsArray;
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
