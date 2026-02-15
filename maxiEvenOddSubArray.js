// Naive Solution:
// The idea is to consider every subarray and find the length of even and odd subarrays.
/**
 *  Input: a[] = {1, 2, 3, 4, 5, 7, 9} 
    Output: 5 
    Explanation: 
    The subarray {1, 2, 3, 4, 5} has alternating even and odd elements.

    Input: a[] = {1, 3, 5} 
    Output: 0 
    Explanation: 
    There is no such alternating sequence possible. 
 */

function longestEvenOddSubarray(a, n) {
    // Length of longest
    // alternating subarray
    let ans = 1;

    // Iterate in the array
    for (let i = 0; i < n; i++) {
        let cnt = 1;
        // Iterate for every subarray
        for (let j = i + 1; j < n; j++) {
            if ((a[j - 1] % 2 == 0 && a[j] % 2 != 0)
                || (a[j - 1] % 2 != 0 && a[j] % 2 == 0))
                cnt++;
            else
                break;
        }
        // store max count
        ans = Math.max(ans, cnt);
    }
    // Length of 'ans' can never be 1
    // since even odd has to occur in pair or more
    // so return 0 if ans = 1
    if (ans == 1)
        return 0;
    return ans;
}

/* Example usage*/
let a = [1, 2, 3, 4, 5, 7, 8];
let n = a.length;
console.log(longestEvenOddSubarray(a, n));
