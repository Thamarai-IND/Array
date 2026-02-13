function leftRotate(arr) {
    let temp;
    temp = arr[0];
    for(let i=0; i<arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length-1]=temp;
    return arr;
}

let arr = [1,2,3,4,5];
const response1 = leftRotate(arr);
console.log(response1);

// move second bit to last position

function leftRotate2(arr) {
    let temp;
    temp = arr[0];
    for(let i=0; i<arr.length; i++) {
        if(i == 2) {
            [arr[i], arr[arr.length-1]]= [arr[arr.length-1],arr[i]]
        }
    }
    // arr[arr.length-1]=temp;
    return arr;
}

let arr2 = [1,2,3,4,5];
const response2 = leftRotate2(arr);
console.log(response2);