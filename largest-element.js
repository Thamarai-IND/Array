// efficient method

// To find the largest element index
function findMax(arr) {
    for(let i=0; i<arr.length; i++) {
        let flag = true;
        
        for(let j=0; j<arr.length; j++) {
            if(arr[i] < arr[j]) {
                flag = false;
                break;
            }
        }
        if(flag == true) return i;
    }
    
    return -1;
}
let arr = [ 5, 10, 25, 15, 10, 20, 25]
const result = findMax(arr);
console.log(result);

// another method

function findMax2(arr) {
    let res = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > arr[res]) res = i;
    }
    return res;
}

let array = [ 5, 10, 25, 15, 40, 20, 25]
const result2 = findMax(array);
console.log(result2);

// largest element findings always returns the first occurence of the largest element index and break once found it