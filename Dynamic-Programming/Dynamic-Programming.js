// ================================================================== WHAT IS DYNAMIC PROGRAMMING? ==================================================================

// A method for solving a complex problem by breaking it down into a collection of simpler sub-problems, solving each of those sub-problems just once, and storing their solutions. 

// DYNAMIC PROGRAMMING only works on problems with OPTIMAL SUBSTRUCTURE & OVERLAPPING SUB-PROBLEMS(both of these have to be present for dynamic programming).

//  WHAT IS OVERLAPPING SUB-PROBLEMS? A problem is said to have overlapping sub-problems if it can be broken down into sub-problems which are re used several times. This means that we can break one problem down into smaller pieces, but some of those pieces are re-used. A good EXAMPLE would be FIBONACCI SEQUENCE, it does have overlapping sub problems. 

// WHAT IS OPTIMAL SUBSTRUCTURE? A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its sub-problems. 

// WHAT IS MEMOIZATION? Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

// WHAT IS TABULATION? Storing the result of the previous result in a 'table' (usually an array). Usually done using ITERATION. Better SPACE COMPLEXITY can be achieved using TABULATION. 



// =================================================================== DYNAMIC PROGRAMMING EXAMPLE ===================================================================

// ------------------ RECURSIVE SOLUTION ------------------
// - the TIME COMPLEXITY for this solution is === BIG 0(2**n) === very BAD :Q  this is EXPONENTIAL TIME COMPLEXITY. which is twice as bad compared to QUADRATIC TIME COMPLEXITY
function fib(n) {
    // base case
    if (n <= 2) return 1;
    // recursive call with different input 
    return fib(n - 1) + fib(n - 2);
};
console.log(fib(30));

// ------------------ A MEMOIZATION SOLUTION ------------------
// the TIME COMPLEXITY for this solution is === BIG O(N) === which is WAY BETTER :D this is LINEAR TIME COMPLEXITY. 
function memoFib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = memoFib(n - 1, memo) + memoFib(n - 2, memo);
    memo[n] = res;
    return res;
};

// ----- REFACTORED MEMOIZATION SOLUTION -----
// function memoFib(n, memo = [0, 1, 1]) {
//     if(memo[n] !== undefined) return memo[n];
//     let res = memoFib(n - 1, memo) + memoFib(n - 2, memo);
//     memo[n] = res;
//     return res;
// };

console.log(memoFib(30));



// ------------------ A TABULATED SOLUTION ------------------
// the TIME COMPLEXITY for this solution is === BIG O(N) === which is WAY BETTER :D this is LINEAR TIME COMPLEXITY. 
// but our SPACE COMPLEXITY is better than MEMOIZATION solution because were not doing recursive calls and waiting on a call stack.
function tabulatedFib(n) {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    };
    return fibNums[n];
};

console.log(tabulatedFib(30));