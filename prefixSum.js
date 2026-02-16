// Build prefix sum array
function buildPrefixSum(arr) {
  let prefix = [0]; // prefix[0] = 0 for convenience
  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[i] + arr[i]);
  }
  return prefix;
}

// Query subarray sum from index l to r (inclusive)
function subarraySum(prefix, l, r) {
  return prefix[r + 1] - prefix[l];
}

// Example usage
let arr = [2, 4, 6, 8, 10];
let prefix = buildPrefixSum(arr);

console.log("Array:", arr);
console.log("Prefix Sum Array:", prefix);

console.log("Sum of arr[0..2]:", subarraySum(prefix, 0, 2)); // 2+4+6 = 12
console.log("Sum of arr[1..3]:", subarraySum(prefix, 1, 3)); // 4+6+8 = 18
console.log("Sum of arr[2..4]:", subarraySum(prefix, 2, 4)); // 6+8+10 = 24
