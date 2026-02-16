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

