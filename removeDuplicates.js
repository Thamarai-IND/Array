// method 1

function removeDup(arr) {
    let n = arr.length;
    let temp = [];
    temp.push(arr[0]);
    for(let i=1; i<n; i++) {
        if(arr[i] != arr[i-1]) {
            temp.push(arr[i]);
        }
    }
    console.log(arr); // [ 1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5 ]
    console.log(temp); //  [ 1, 2, 3, 4, 5 ]
    for(let i=0; i<temp.length; i++) {
        arr[i] = temp[i];
    }
    console.log(arr); // [ 1, 2, 3, 4, 5, 3, 3, 3, 4, 5, 5 
    console.log(temp); //  [ 1, 2, 3, 4, 5 ]
    return temp.length; // 5
}

let arr1 = [1,1,1,2,2,3,3,3,4,5,5];
const result1 = removeDup(arr1);
console.log(result1);