/**
 * 
 * Input: arr = [ 7, 10, 4, 3, 6, 5, 2 ]
 * Output: leader = [ 10, 6, 5, 2 ]
 * Input: arr = [ 10, 20, 30 ]
 * Output: leader = [ 30 ]
 * Input: arr = [ 30, 20, 10 ]
 * Output: leader = [ 30, 20, 10 ]
 * Input: arr = [ 30, 10, 20 ]
 * Output: leader = [ 30, 20 ]
 * Input: arr = [ 20, 10, 30 ]
 * Output: leader = [ 30 ]
 * Input: arr = [ 20, 30, 10 ]
 * Output: leader = [ 30, 10 ]
 * Input: arr = [ 10, 30, 20 ]
 * Output: leader = [ 30, 20 ]
 * 
 * Note: Right element is always a leader [ No Greater element on right side ]
 * 
 */

// Naive Solution
/** For every element, traverse the element on right if there is no greater, then print it */

function printLeadersNaive(arr) {
    for(let i=0; i<arr.length; i++) {
        let flag = false;

        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] > arr[i]) {
                flag = true;
                break;
            }
        }

        if(flag == false) {
            console.log(arr[i]);
        }
    }
}

let arr1 = [ 7, 10, 4, 3, 6, 5, 2 ];
const result1 = printLeadersNaive(arr1);
console.log(result1);