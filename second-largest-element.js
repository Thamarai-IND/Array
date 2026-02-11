// Brute Force Approach

function secondLargestBruteForce(arr) {
    if (arr.length < 2) return "The second largest does not exist";

    arr.sort((a, b) => a - b);

    const largest = arr[arr.length - 1];
    let index = arr.length - 2;

    // Skip duplicates of the largest element
    while (index >= 0 && arr[index] === largest) {
        index--;
    }

    return index >= 0 ? `The second largest element is \${arr[index]}` : "The second largest does not exist";
}

// Test cases
console.log(secondLargestBruteForce([12, 35, 1, 10, 34, 1]));
console.log(secondLargestBruteForce([10, 5, 10]));
console.log(secondLargestBruteForce([10, 10, 10]));

// Optimized Approach

function secondLargestOptimized(arr) {
    if (arr.length < 2) return "The second largest does not exist";

    let firstMax = -1;
    let secondMax = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] < firstMax && arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }

    return secondMax !== -1
        ? `The second largest element is \${secondMax}`
        : "The second largest does not exist";
}

// Test cases
console.log(secondLargestOptimized([12, 35, 1, 10, 34, 1]));
console.log(secondLargestOptimized([10, 5, 10]));
console.log(secondLargestOptimized([10, 10, 10]));