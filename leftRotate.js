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


// another method

function leftRotate4(arr,d) {
    let temp = [];
    for(let i=0; i<d; i++) {
        temp[i] = arr[i];
    }
    for(let i=d; i<arr.length; i++) {
        arr[i-d] = arr[i];
    }
    for(let i=0; i<d; i++) {
        arr[arr.length-d+i] = temp[i];
    }
    return arr;
}

let arr4 = [1, 2, 3, 4, 5]
let d1 = 2;
const response4 = leftRotate4(arr4,d1);
console.log(response4);
