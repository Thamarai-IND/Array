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
    // console.log(arr); // [ 1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5 ]
    // console.log(temp); //  [ 1, 2, 3, 4, 5 ]
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


// optimized approach

function removeDupOptimized(arr) {
    let n = arr.length;
    let index = 1;

    for(let i=1; i<n; i++) {
        if(arr[i] != arr[i-1]) {
            arr[index] = arr[i];
            index++;
        }
    }
    return [index,arr];
}   

let arr2 = [1,1,1,2,2,3,3,3,4,5,5];
const result2 = removeDupOptimized(arr2);
console.log("optimized approach : ",result2);


// Using for loop + Object/Map (Most Efficient for Large Arrays)
function removeDuplicates1(arr) {
  let seen = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates1([10, 20, 20, 30, 40, 50, 50]));
// Output: [10, 20, 30, 40, 50]


// Using for loop + includes() (Simpler but Less Efficient)

function removeDuplicates2(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates2([10, 20, 20, 30, 40, 50, 50]));
// Output: [10, 20, 30, 40, 50]


// Using for...of loop + Set (Hybrid Approach)

function removeDuplicates3(arr) {
  let seen = new Set();
  let result = [];

  for (let value of arr) {
    if (!seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
  }
  return result;
}

console.log(removeDuplicates3([10, 20, 20, 30, 40, 50, 50]));
// Output: [10, 20, 30, 40, 50]
