// traditional approach

function reverseArray1(arr) {
    let rarr = [];
    for(let i=arr.length-1; i>=0; i--) {
        rarr.push(arr[i]);
    }
    return rarr;
}

let arr1 = [7,4,2,5,6];
const reponse1 = reverseArray1(arr1);
console.log(reponse1);


// naive approach

function reverseArray2(arr) {
    let low = 0;
    let high = arr.length-1

    while(low < high) {
        [arr[low],arr[high]] = [arr[high],arr[low]];
        low++;
        high--
    }
    return arr;
}

let arr2 = [1,2,3,4,5];
const reponse2 = reverseArray2(arr2);
console.log(reponse2);