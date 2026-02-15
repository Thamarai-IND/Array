// Naive Approach:

/**
        Input: arr[] = {8, -8, 9, -9, 10, -11, 12}
        Output: 22 
        Explanation: Subarray 12, 8, -8, 9, -9, 10 gives the maximum sum, that is 22.

        Input: arr[] = {10, -3, -4, 7, 6, 5, -4, -1} 
        Output:  23 
        Explanation: Subarray 7, 6, 5, -4, -1, 10 gives the maximum sum, that is 23.

        Input: arr[] = {-1, 40, -14, 7, 6, 5, -4, -1}
        Output: 52 
        Explanation: Subarray 7, 6, 5, -4, -1, -1, 40 gives the maximum sum, that is 52.
 */

function maxCircularSum(arr, n) {
let res = arr[0];

for (let i = 0; i < n; i++) {
let curr_max = arr[i];
let curr_sum = arr[i];

for (let j = 1; j < n; j++) {
  let index = (i + j) % n;

  curr_sum += arr[index];

  curr_max = Math.max(curr_max, curr_sum);
}

res = Math.max(res, curr_max);
}
return res;
}

// Example usage
let arr = [5, -2, 3, 4];
let n = arr.length;
console.log(maxCircularSum(arr, n)); // output: 12


// efficient solution: 

function normalMaxSum(arr, n) {
let res = arr[0];
let maxEnding = arr[0];
for (let i = 1; i < n; i++) {
maxEnding = Math.max(maxEnding + arr[i], arr[i]);
res = Math.max(maxEnding, res);
}
return res;
}

function overallMaxSum(arr, n) {
let max_normal = normalMaxSum(arr, n);
if (max_normal < 0) return max_normal;
let arr_sum = 0;
for (let i = 0; i < n; i++) {
arr_sum += arr[i];
arr[i] = -arr[i];
}
let max_circular = arr_sum + normalMaxSum(arr, n);
return Math.max(max_circular, max_normal);
}

// Example usage
let array = [8, -4, 3, -5, 4];
let len = array.length;
console.log(overallMaxSum(array, len));