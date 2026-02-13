function isSorted1(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j]<arr[i]) return false;
        }
    }
    return true;
}

// let arr = [10,20,15,5,25];
let arr = [10,20,30];
const result = isSorted1(arr);
result ? console.log("Given array is sorted") : console.log("Given array is not sorted");



// Naive Method

function isSorted2(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]<arr[i-1]) return false;
    }
    return true;
}

let arr2 = [10,20,15,5,25];
// let arr2 = [10,20,30];
const result2 = isSorted1(arr2);
result2 ? console.log("Given array is sorted") : console.log("Given array is not sorted");
