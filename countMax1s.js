// Naive Solution

// to find the maximum consecutive 1s in an given array

/**
 * Input: arr = [ 1, 1, 0, 1, 1, 1, 0 ]
 * Output: 3
 * Input: arr = [ 1, 1, 0, 1, 0, 1, 0 ]
 * Output: 2
 * Input: arr = [ 1, 1, 1, 1, 0, 1, 0 ]
 * Output: 4
 */

function countMax1s(arr) {
    let count =0, res = 0;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 0) {
            count = 0;
        }
        else {
            count++;
            res = Math.max(res,count);
        }
    }
    return res;
}

let array = [ 1, 1, 0, 1, 1, 1, 0 ];
const result = countMax1s(array);
console.log(result);