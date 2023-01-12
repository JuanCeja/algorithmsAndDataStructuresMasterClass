// Greedy Algorithm - Coin Change

// Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

// ============================================================================================================================================================================================

function minCoinChange(coins, amount) {
    const arr_min = []

    for (let i = 0; i < amount + 1; i++) {
        arr_min.push(i)
    }

    function helper(amount, arr_min) {
        if (coins.includes(amount)) {
            return [amount]
        }

        let result;
        for (const coin of coins) {
            if (coin <= amount) {
                result = [coin].concat(helper(amount - coin, arr_min))
                if (result.length < arr_min[amount]) {
                    arr_min[amount] = result.length
                }
            }
        }
        return result
    }
    return helper(amount, arr_min)
}

const denominations = [1, 5, 10, 25]

console.log(minCoinChange(denominations, 1)) // [ 1 ]
console.log(minCoinChange(denominations, 2)) // [ 1, 1 ]
console.log(minCoinChange(denominations, 5)) // [ 5 ]
console.log(minCoinChange(denominations, 10)) //[ 10 ]
console.log(minCoinChange(denominations, 25)) //[ 25 ]
console.log(minCoinChange(denominations, 45)) //[ 25, 10, 10 ]