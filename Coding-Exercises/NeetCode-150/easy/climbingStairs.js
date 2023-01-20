// CLIMBING STAIRS 

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// ==========
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps


// Example 2:
// ==========
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// ===================================================================================================================================================================================

const climbStairs = (n) => {
    const possibilities = {};

    let count = function (k) {
        if (possibilities[k]) return possibilities[k];
        if (k === 2) return 2;
        if (k <= 1) return 1;
        possibilities[k] = count(k - 1) + count(k - 2);
        return possibilities[k];
    }
    return count(n);
}

console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5