// Dynamic Programming - Coin Change

// Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

// ============================================================================================================================================================================================

function coinChange(coins, value) {
    let combinations = Array(value + 1).fill(0);
    combinations[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j < combinations.length; j++) {
            if (j >= coins[i]) {
                combinations[j] += combinations[j - coins[i]];
            }
        }
    }
    return combinations[combinations.length - 1];
}

const denominations = [1, 5, 10, 25]

console.log(coinChange(denominations, 1)) // 1
console.log(coinChange(denominations, 2)) // 1
console.log(coinChange(denominations, 5)) // 2
console.log(coinChange(denominations, 10)) // 4
console.log(coinChange(denominations, 25)) // 13
console.log(coinChange(denominations, 45)) // 39
console.log(coinChange(denominations, 100)) // 242
console.log(coinChange(denominations, 145)) // 622
console.log(coinChange(denominations, 1451)) // 425663
console.log(coinChange(denominations, 14511)) // 409222339