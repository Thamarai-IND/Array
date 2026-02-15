// brute approach 

/**
 * Traverse every array element and find the highest bars on the left and right sides. 
 * Take the smaller of two heights. 
 * The difference between the smaller height and the height of the current element 
 * is the amount of water that can be stored in this array element.
 */

// javascript implementation of the approach

function maxWater(arr, n) {
  // To store the maximum water
  // that can be stored
  let res = 0;

  // For every element of the array
  for (let i = 1; i < n - 1; i++) {

    // Find the maximum element on its left
    let left = arr[i];
    for (let j = 0; j < i; j++)
      left = Math.max(left, arr[j]);

    // Find the maximum element on its right
    let right = arr[i];
    for (let j = i + 1; j < n; j++)
      right = Math.max(right, arr[j]);

    // Update the maximum water
    res = res + (Math.min(left, right) - arr[i]);
  }

  return res;
}

// Driver code
let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let n = arr.length;

console.log(maxWater(arr, n)); 
// Time Complexity: O(N2). There are two nested loops traversing the array.
// Space Complexity: O(1). No extra space is required.


// efficient solution


function findWater(arr, n) {
  // left[i] contains height of tallest bar to the
  // left of i'th bar including itself
  let left = new Array(n);

  // right[i] contains height of tallest bar to
  // the right of ith bar including itself
  let right = new Array(n);

  // Initialize result
  let water = 0;

  // Fill left array
  left[0] = arr[0];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], arr[i]);
  }

  // Fill right array
  right[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], arr[i]);
  }

  // Calculate the accumulated water element by element
  // consider the amount of water on i'th bar, the
  // amount of water accumulated on this particular
  // bar will be equal to min(left[i], right[i]) - arr[i]
  // .
  for (let i = 1; i < n - 1; i++) {
    let x = Math.min(left[i - 1], right[i + 1]);
    if (x > arr[i]) {
      water += x - arr[i];
    }
  }

  return water;
}

// Example usage
let arr1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let len = arr.length;
console.log(findWater(arr1, len));

// Time Complexity: O(N). Only one traversal of the array is needed, So time Complexity is O(N).
// Space Complexity: O(N). Two extra arrays are needed, each of size N.