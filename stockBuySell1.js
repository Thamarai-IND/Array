// Stock Buy and Sell Part 1  -  All time Interview Problem

function maxProfit(arr, b, e) {
    if (b >= e) return 0;

    let res = 0;
    for (let i = b; i < e; i++) {
        for (let j = i + 1; j <= e; j++) {
            if (arr[j] > arr[i]) {
                let curr = (arr[j] - arr[i]) +
                           maxProfit(arr, b, i - 1) +
                           maxProfit(arr, j + 1, e);
                res = Math.max(res, curr);
            }
        }
    }
    return res;
}

// Driver code
const arr = [1, 5, 3, 8, 12];
const result = maxProfit(arr, 0, arr.length - 1);
console.log("Maximum Profit:", result);

// Time Complexity = O(2^n). - Extremely inefficient due to overlapping recursive calls

// Space Complexity = O(n)  - The deepest recursive call chain is at most n calls deep.
// There is no memoization, so no extra memory is saved for subproblems.
