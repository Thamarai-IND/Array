// Naive Solution

function isSubArraySum(arr,sum) {
    for(let i=0; i<arr.length; i++) {
        let curr = 0;
        for(let j=i; j<arr.length; j++) {
            curr += arr[j];
            if(curr == sum) {
                return true
            }
        }
    }
    return false;
}

let array1 = [1,4,20,3,10,5];
let sum1 = 33;
const response1 = isSubArraySum(array1,sum1);
response1 ? console.log("we found the sum in this sub array") : console.log("we do not have any sum in this sub array");

// Time Complexity : O(N^2) and Space Complexity : O(1)


// Efficient Solution
// we use window sliding technique with a window of variable size


function isSubArraySumEfficient(arr,sum) {
    let start = 0;
    let curr = 0;

    for(let end=0; end<arr.length; end++) {
        curr += arr[end];

        while(sum < curr) {
            curr -= arr[start];
            start++
        }

        if(curr == sum) {
            return true;
        }
    }
    return false;
}

let array2 = [1,4,20,3,10,5];
let sum2 = 33;
const response2 = isSubArraySumEfficient(array2,sum2);
response2 ? console.log("we found the sum in this sub array") : console.log("we do not have any sum in this sub array");

// time complexity O(N) and auxiliary space complexity O(1)
