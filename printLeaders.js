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

// More efficient way - traverse the element from right side to keep track of the maximum

/**
 * Input: arr = [ 5, 8, 6, 10, 4,7 ]
 * result array = [ 7, 10 ]
 * then reverse the array
 * Output: leader = [ 10, 7]
 */

function printLeadersEfficient(arr) {
    let res = [];
    let n = arr.length;
    let currLead = arr[n-1];
    res.push(currLead);

    for(let i=n-2; i>=0; i--) {
        if(arr[i] >= currLead) {
            currLead = arr[i];
            res.push(currLead);
        }
    }

    for(let i=res.length-1; i>=0; i--) {
        console.log(res[i]);
    }
    return res.reverse();
}

let arr2 = [ 5, 8, 6, 10, 4,7 ];
const result2 = printLeadersEfficient(arr2);
console.log("efficient way : ",result2);