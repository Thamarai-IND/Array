// Frequencies in a sorted array
/**
 * Input: arr = [ 10, 10, 10, 25, 30, 30 ]
 * Output: [ 10:3, 25:1, 30:2 ]
 */

function freqArr(arr) {
    let i = 0;
    while (i < arr.length) {
        let j = i + 1, freq = 1;

        while (j < arr.length) {
            if (arr[j] === arr[i]) {
                freq++;
                j++;
            } else {
                break;
            }
        }

        console.log(`Frequency of ${arr[i]} is: ${freq}`);
        i = j;
    }
}

// Example usage:
freqArr([10, 20, 20, 20, 30, 30, 30]);