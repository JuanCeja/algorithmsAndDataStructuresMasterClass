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

    // loop through object

    // check to see if element in the loop in an object

    // if it is an object we make our recursive call

    // if it is not a object we check to see if the value is even
    // if value is even we add to our evenCount variable

    // return our evenCount variable
}

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
