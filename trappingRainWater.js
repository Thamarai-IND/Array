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