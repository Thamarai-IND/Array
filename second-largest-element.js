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

    return index >= 0
        ? `The second largest element is \${arr[index]}`
        : "The second largest does not exist";
}

// Test cases
console.log(secondLargestBruteForce([12, 35, 1, 10, 34, 1]));
console.log(secondLargestBruteForce([10, 5, 10]));
console.log(secondLargestBruteForce([10, 10, 10]));