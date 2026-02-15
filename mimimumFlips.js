// Naive Solution

/**
 * 
        Input : arr[] = {1, 1, 0, 0, 0, 1}
        Output :  From 2 to 4
        Explanation : We have two choices, we make all 0s or do all 1s.  
                      We need to do two group flips to make all elements 0 and one group flip to make all elements 1.  
                      Since making all elements 1 takes least group flips, we do this.

        Input : arr[] = {1, 0, 0, 0, 1, 0, 0, 1, 0, 1}
        Output :  
        From 1 to 3
        From 5 to 6
        From 8 to 8
        Input : arr[] = {0, 0, 0}
        Output :  
        Explanation : Output is empty, we need not to make any change
        Input : arr[] = {1, 1, 1}
        Output :  
        Explanation : Output is empty, we need not to make any change
        Input : arr[] = {0, 1}
        Output :   
        From 0 to 0  
        OR
        From 1 to 1
        Explanation :  Here number of flips are same either we make all elements as 1 or all elements as 0.

 * 
 * 
 * 
 * A Naive Solution is to traverse do two traversals of the array. 
 * We first traverse to find the number of groups of 0s and the number of groups of 1.  
 * We find the minimum of these two.  
 * Then we traverse the array and flip the 1s if groups of 1s are less. 
 * Otherwise, we flip 0s.
 * 
 * 
 *  An Efficient Solution is based on the below facts : 

        There are only two types of groups (groups of 0s and groups of 1s)
        Either the counts of both groups are same or the difference between counts is at most 1. 
        For example, in {1, 1, 0, 1, 0, 0} there are two groups of 0s and two groups of 1s.  
        In example, {1, 1, 0, 0, 0, 1, 0, 0, 1, 1}, count of groups of 1 is one more than the counts of 0s.


 * 
 */

function printGroups(arr, n) {
    for (let i = 1; i < n; i++) {
        if (arr[i] !== arr[i - 1]) {
            if (arr[i] !== arr[0]) {
                console.log(`From \${i} to`);
            } else {
                console.log(i - 1);
            }
        }
    }
    if (arr[n - 1] !== arr[0]) {
        console.log(n - 1);
    }
}

let arr = [0, 1, 1, 0, 0, 0, 1, 1];
let n = arr.length;
printGroups(arr, n); 

/**
 * ouput:
 *  
 *      From 1 to 2
 *      From 6 to 7
 */

// Time Complexity:  O(n) and Auxiliary Space:  O(1)