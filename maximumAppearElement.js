// naive solution

function maxAppearingNaive(L, R) {
  let freq = {};
  let maxElement = -1, maxCount = 0;

  for (let i = 0; i < L.length; i++) {
    for (let j = L[i]; j <= R[i]; j++) {
      freq[j] = (freq[j] || 0) + 1;
      if (freq[j] > maxCount) {
        maxCount = freq[j];
        maxElement = j;
      }
    }
  }
  return maxElement;
}

// Example
let L = [1, 2, 3];
let R = [3, 5, 7];
console.log("Naive:", maxAppearingNaive(L, R)); // Output: 3

// Time complexity: O(n * maxRange) → inefficient for large inputs.


// Efficient Solution

// JavaScript function to find maximum occurred element in
// given N ranges.

function maximumOccurredElement(L, R, n) {
  // Initialising all element of array to 0.
  let arr = new Array(1000000).fill(0);

  // Adding +1 at Li index and subtracting 1
  // at Ri index.
  let maxi = -1;
  for (let i = 0; i < n; i++) {
    arr[L[i]] += 1;
    arr[R[i] + 1] -= 1;
    if (R[i] > maxi) {
      maxi = R[i];
    }
  }

  // Finding prefix sum and index having maximum
  // prefix sum.
  let msum = arr[0],
    ind;
  for (let i = 1; i < maxi + 1; i++) {
    arr[i] += arr[i - 1];
    if (msum < arr[i]) {
      msum = arr[i];
      ind = i;
    }
  }

  return ind;
}

// Driven code
let L1 = [1, 4, 9, 13, 21];
let R1 = [15, 8, 12, 20, 30];
let n = L.length;

console.log(maximumOccurredElement(L1, R1, n));


// another efficient method

function maxAppearingEfficient(L, R) {
  let maxVal = Math.max(...R) + 2; // size of difference array
  let diff = new Array(maxVal).fill(0);

  // Step 1: Mark ranges
  for (let i = 0; i < L.length; i++) {
    diff[L[i]]++;
    diff[R[i] + 1]--;
  }

  // Step 2: Build prefix sum & track max
  let maxElement = -1, maxCount = 0, curr = 0;
  for (let i = 0; i < maxVal; i++) {
    curr += diff[i];
    if (curr > maxCount) {
      maxCount = curr;
      maxElement = i;
    }
  }
  return maxElement;
}

// Example
console.log("Efficient:", maxAppearingEfficient(L, R)); // Output: 3
