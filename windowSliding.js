/**
 * find the maximum sum of K consecutive elements
 * Input: arr = [ 1, 8, 30, -5, 20, 7] and K = 3
 * Output: 45
 * 
 * Input: arr = [ 5, -10, 6, 90, 3 ] and K = 2
 * Output: 96
 * 
 */

// Naive Solution

function maxSumSlidingWindow(arr,k) {
    let res = Number.NEGATIVE_INFINITY;

    for(let i=0; i+k-1<arr.length; i++) {
        let curr = 0;

        for(let j=0; j<k; j++) {
            curr += arr[i+j];
        }
        res = Math.max(res,curr);
    }
    return res;
}

let array1 = [ 10, 5, -2, 20, 1 ];
let k1 = 3;
const result1 = maxSumSlidingWindow(array1,k1);
console.log(result1);