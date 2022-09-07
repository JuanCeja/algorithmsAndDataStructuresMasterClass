// 1. BASE CASE

// We need a base case. This is the condition when the recursion ends. This is the most important concept to understand.

// 2. DIFFERENT INPUT

// We want to call the same function over and over but each time with a different piece of data. You don't want to keep using the same data because we will never get anywhere. So we change our data and run our data again. 

// ===================================================================================

function countDown(num) {

    // this is our base case
    if(num <= 0) {
        console.log('All done!');
        return;
    } 

    // here we change our data and recall our function with our new data
    console.log(num);
    num--;
    countDown(num);
}

console.log(countDown(3))

// STEPS OF OUR RECURSION FUNCTION

// print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0)
// print "All done!"