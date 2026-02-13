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
const response2 = leftRotate2(arr2);
console.log(response2);

// left rotate by D position

function leftRotateByOne(arr) {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = first;
    return arr;
}

function leftRotateNaive(arr, d) {
    for (let i = 0; i < d; i++) {
        leftRotateByOne(arr);
    }
    return arr;
}

let arr3 = [1, 2, 3, 4, 5]
let d = 3;
const response3 = leftRotateNaive(arr3,d);
console.log(response3);