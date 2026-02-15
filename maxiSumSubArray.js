// naive approach

function maxSum(arr) {
    let sum = arr[0]; // Initialize the sum to the first element
    for (let i = 0; i < arr.length; i++) {
        let curr = 0; 
        for (let j = i; j < arr.length; j++) {
            curr += arr[j]; 
        }
        sum = Math.max(sum, curr); // Update the maximum sum
    }
    return sum;
}

// Test case
const arr = [1, -2, 3, 4, -1, 2, 1, -5, 4];
console.log("Maximum Subarray Sum:",maxSum(arr));

// Time Complexity: O(N^2) and Auxiliary Space: O(1)


// efficient approach - Optimized Approach (Kadane’s Algorithm)

/**
 * Kadane’s algorithm is a more efficient method for solving the maximum subarray sum problem. 
 * It tracks the maximum sum ending at each position and updates the global maximum.
 */

function maximum(arr) {
    let sum = arr[0];
    let maxEnding = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxEnding = Math.max(maxEnding + arr[i], arr[i]); // Choose the max between adding the current element or starting a new subarray
        sum = Math.max(maxEnding, sum); 
    }
    return sum; 
}

// Test case
const arr2 = [1, -2, 3, 4, -1, 2, 1, -5, 4];
console.log("Max Subarray Sum:", maximum(arr2)); // Expected Output: 7

// Time Complexity: O(N) and Auxiliary Space: O(1)
