// More efficient way

function secondLargest(arr) {
  let first = -Infinity;   // largest
  let second = -Infinity;  // second largest

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > first) {
      // shift down
      second = first;
      first = num;
    } else if (num > second && num < first) {
      // update second only if it's less than first
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// Example usage:
console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
console.log(secondLargest([5, 5, 6]));           // Output: null (no second largest)
