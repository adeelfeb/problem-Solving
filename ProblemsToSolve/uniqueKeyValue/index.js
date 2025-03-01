"use strict";
function countFrequencies(numbers) {
    return numbers.reduce((acc, num) => {
        console.log(`the value at ${num} is ${acc[num]}`);
        acc[num] = (acc[num] || 0) + 1; // Increment the count for the number
        return acc;
    }, {});
}
// Test the function
const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 3, 43, 4, 3, 2, 3, 4];
console.log(countFrequencies(numbers));
