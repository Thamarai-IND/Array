/**
 * Find the majority element in the array. 
 * A majority element in an array A[] of size n is an element,
 * that appears more than n/2 times (and hence there is at most one such element). 
 * 
 * 
    Input : {3, 3, 4, 2, 4, 4, 2, 4, 4}
    Output : 4
    Explanation: The frequency of 4 is 5 which is greater than the half of the size of the array size. 

    Input : {3, 3, 4, 2, 4, 4, 2, 4}
    Output : No Majority Element
    Explanation: There is no element whose frequency is greater than the half of the size of the array size.

 */

// naive solution 

function findMajority(arr, n) {
  let maxCount = 0;
  let index = -1; // sentinels
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] === arr[j]) count++;
    }

    // update maxCount if count of
    // current element is greater
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }

  // if maxCount is greater than n/2
  // return the corresponding element
  if (maxCount > n / 2) {
    console.log(arr[index]);
  } else {
    console.log("No Majority Element");
  }
}

// Example usage
let arr = [1, 1, 2, 1, 3, 5, 1];
let n = arr.length;
findMajority(arr, n); // output: 1
// Time Complexity: O(n*n), A nested loop is needed where both the loops traverse the array from start to end.
// Auxiliary Space: O(1), No extra space is required.


// Efficient approach - Majority Element Using Moore’s Voting Algorithm:

/**
 * This is a two-step process:

    The first step gives the element that may be the majority element in the array. 
    If there is a majority element in an array, 
    then this step will definitely return majority element, 
    otherwise, it will return candidate for majority element.
    Check if the element obtained from the above step is the majority element. 
    This step is necessary as there might be no majority element. 

 */

function findCandidate(a, size) {
let majIndex = 0,
count = 1;
for (let i = 1; i < size; i++) {
if (a[majIndex] === a[i]) {
count++;
} else {
count--;
}
if (count === 0) {
majIndex = i;
count = 1;
}
}
return a[majIndex];
}

function isMajority(a, size, cand) {
let count = 0;
for (let i = 0; i < size; i++) {
if (a[i] === cand) {
count++;
}
}
if (count > size / 2) {
return 1;
} else {
return 0;
}
}

function printMajority(a, size) {
let cand = findCandidate(a, size);

if (isMajority(a, size, cand)) {
console.log(candidating);
} else {
console.log("No Majority Element");
}
}

// Example usage
let a = [1, 3, 3, 1, 2];
let size = a.length;
printMajority(a, size); // output: no majority element

// Time Complexity: O(n), As two traversal of the array, is needed, so the time complexity is linear.
// Auxiliary Space: O(1), As no extra space is required.