// Efficient Solution fro Stock Buy and Sell to find the maximum profit

// JavaScript implementation of the approach

function maxProfit(price, n) {
    let profit = 0;

    for(let i = 1; i < n; i++) {
        if(price[i] > price[i - 1]) {
            profit += price[i] - price[i - 1];
        }
    }

    return profit;
}

let arr = [1, 5, 3, 8, 12];
let n = 5;

console.log(maxProfit(arr, n));