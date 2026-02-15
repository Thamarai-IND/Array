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



