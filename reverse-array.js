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