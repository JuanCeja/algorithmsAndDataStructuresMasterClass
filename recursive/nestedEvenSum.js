// nestedEvenSum

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

// =====================================================================

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

function nestedEvenSum(obj) {
    // create variable to add even numbers
    let evenCount = 0;

    // loop through object
    for(const element in obj) {

        // check to see if element in the loop in an object
        if(typeof obj[element] === 'object') {

            // if it is an object we make our recursive call
            evenCount += nestedEvenSum(obj[element]);

            // if it is not a object we check to see if the value is even
        } else if (obj[element] % 2 === 0 && typeof obj[element] === 'number') {

            // if value is even we add to our evenCount variable
            evenCount += obj[element];
        }
    }

    // return our evenCount variable
    return evenCount;
}

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
