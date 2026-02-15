// Naive Solution:
// The idea is to consider every subarray and find the length of even and odd subarrays.
/**
 *  Input: a[] = {1, 2, 3, 4, 5, 7, 9} 
    Output: 5 
    Explanation: 
    The subarray {1, 2, 3, 4, 5} has alternating even and odd elements.

    Input: a[] = {1, 3, 5} 
    Output: 0 
    Explanation: 
    There is no such alternating sequence possible. 
 */

function longestEvenOddSubarray(a, n) {
    // Length of longest
    // alternating subarray
    let ans = 1;

    // Iterate in the array
    for (let i = 0; i < n; i++) {
        let cnt = 1;
        // Iterate for every subarray
        for (let j = i + 1; j < n; j++) {
            if ((a[j - 1] % 2 == 0 && a[j] % 2 != 0)
                || (a[j - 1] % 2 != 0 && a[j] % 2 == 0))
                cnt++;
            else
                break;
        }
        // store max count
        ans = Math.max(ans, cnt);
    }
    // Length of 'ans' can never be 1
    // since even odd has to occur in pair or more
    // so return 0 if ans = 1
    if (ans == 1)
        return 0;
    return ans;
}

/* Example usage*/
let a = [1, 2, 3, 4, 5, 7, 8];
let n = a.length;
console.log(longestEvenOddSubarray(a, n)); // output: 5
// Time Complexity: O(N2), Iterating over every subarray therefore N2 are possible
// Auxiliary Space: O(1)

// Efficient approach 
// By simply storing the nature of the previous element we encounter( odd or even) and comparing it with the next element.

/**
 * points: 
 
    Initialize a variable maxLength to 0, to keep the track of maximum length of the alternating subarray obtained.
    Initialize a variable currLen to 1 considering first element as the part of alternating subarray.
    Starting with element at index 1, compare every element with it’s previous. If there nature are different, increment the currLen variable.
    Otherwise, reset the currLen to 1 again so that, this current element is considered in new alternating subarray.
    Keep storing the max length of subarray in maxLength before resetting the currLen.
    Return the found max length of subarray.

 */


function maxEvenOdd(arr, n) {
  if (n === 0) return 0;

  let maxLength = 1;  
  let currLen = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] % 2 !== arr[i - 1] % 2) {
      currLen++;
    } else {
      maxLength = Math.max(maxLength, currLen);
      currLen = 1;
    }
  }
  maxLength = Math.max(maxLength, currLen);
  
  return maxLength;
}

let array = [1, 2, 3, 4, 5, 3, 7, 2, 9, 4];
let len = array.length;
console.log(`Length of longest subarray of even and odds is : ${maxEvenOdd(array, len)}`);
// output: 5

//  Time Complexity: O(N), Since we need to iterate over the whole array once
// Auxiliary Space: O(1)


