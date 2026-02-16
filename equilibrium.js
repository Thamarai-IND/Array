// naive solution
/**
 * array1 = [3,4,8,-9,9,7];
 * compute prefix sum 
 * PS = [ 3, 7, 15, 6, 15, 22 ]
 * compute suffix sum
 * SS = [ 22, 19, 15, 7, 16, 7]
 * For every element ( except corner ones),
 * Check if PS(i-1) is same as SS[i+1]
 */
function ePoint1(arr) {
    let n = arr.length;
    for(let i=0; i<n; i++) {
        let ls = 0, rs = 0;
        for(let j=0; j<i; j++) {
            ls += arr[j];
        }
        for(let j=i+1; j<n; j++) {
            rs += arr[j];
        }
        if(ls == rs) {
            return true;
        }
    }
    return false;
}

let array1 = [3,4,8,-9,9,7];
const response1 = ePoint1(array1);
response1 ? console.log("we found equilibrium point") : console.log("we not found equilibrium point");


