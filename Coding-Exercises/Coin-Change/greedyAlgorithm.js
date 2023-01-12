// Greedy Algorithm - Coin Change

// Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

// ============================================================================================================================================================================================

function minCoinChange(denominations, value) {
    // Initialize an array to store the minimum number of coins for each value
    const minCoins = new Array(value + 1).fill(Infinity);
    // Initialize an array to store the coins used for each value
    const coins = new Array(value + 1);
    // The minimum number of coins to obtain a value of 0 is 0
    minCoins[0] = 0;

    // Iterate through each denomination
    for (let i = 0; i < denominations.length; i++) {
        // Iterate through each value from the denomination to the target value
        for (let j = denominations[i]; j <= value; j++) {
            // If using the current denomination results in fewer coins than the current minimum
            if (minCoins[j - denominations[i]] + 1 < minCoins[j]) {
                // Update the minimum number of coins for the current value
                minCoins[j] = minCoins[j - denominations[i]] + 1;
                // Update the coins used for the current value
                coins[j] = [denominations[i], ...(coins[j - denominations[i]] || [])];
            }
        }
    }

    // Return the coins used to obtain the target value
    return coins[value];
}

const denominations = [1, 5, 10, 25]

console.log(minCoinChange(denominations, 1)) // [ 1 ]
console.log(minCoinChange(denominations, 2)) // [ 1, 1 ]
console.log(minCoinChange(denominations, 5)) // [ 5 ]
console.log(minCoinChange(denominations, 10)) //[ 10 ]
console.log(minCoinChange(denominations, 25)) //[ 25 ]
console.log(minCoinChange(denominations, 45)) //[ 25, 10, 10 ]