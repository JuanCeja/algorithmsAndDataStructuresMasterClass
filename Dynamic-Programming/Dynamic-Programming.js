// ================================================================== WHAT IS DYNAMIC PROGRAMMING? ==================================================================

// A method for solving a complex problem by breaking it down into a collection of simpler sub-problems, solving each of those sub-problems just once, and storing their solutions. 

// DYNAMIC PROGRAMMING only works on problems with OPTIMAL SUBSTRUCTURE & OVERLAPPING SUB-PROBLEMS(both of these have to be present for dynamic programming).

//  WHAT IS OVERLAPPING SUB-PROBLEMS? A problem is said to have overlapping sub-problems if it can be broken down into sub-problems which are re used several times. This means that we can break one problem down into smaller pieces, but some of those pieces are re-used. A good EXAMPLE would be FIBONACCI SEQUENCE, it does have overlapping sub problems. 

// WHAT IS OPTIMAL SUBSTRUCTURE? A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its sub-problems. 



// =================================================================== DYNAMIC PROGRAMMING EXAMPLE ===================================================================

// ------------------ RECURSIVE SOLUTION ------------------
// - the TIME COMPLEXITY for this solution is === BIG 0(2**n) === very BAD. this is EXPONENTIAL TIME COMPLEXITY. which is twice as bad compared to QUADRATIC TIME COMPLEXITY
function fib(n) {
    // base case
    if (n <= 2) return 1;
    // recursive call with different input 
    return fib(n - 1) + fib(n - 2);
};
console.log(fib(7));

