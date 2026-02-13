// traditional approach
function zerosToEnd1(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 0) {
            for(let j=i+1; j<arr.length; j++) {
                if(arr[j] != 0) {
                    [arr[i],arr[j]] = [arr[j],arr[i]];
                    break;
                }
            }
        }
    }
    return arr;
}

let arr1 = [5,0,1,0,0,7];
const response1 = zerosToEnd1(arr1);
console.log(response1);

// naive solution

function zerosToEnd2(arr) {
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] != 0) {
            [arr[i],arr[count]] = [arr[count],arr[i]];
            count++;
        }
    }
    return arr;
}

let arr2 = [6,0,0,0,0,8];
const response2 = zerosToEnd2(arr2);
console.log(response2);