"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayInput = [
    { name: "Alice", score: 10 },
    { name: "Bob", score: 5 },
    { name: "Alice", score: 7 },
    { name: "Bob", score: 3 },
    { name: "Charlie", score: 15 }
];
const makeGroupOfScore = (arrayOfObject) => {
    return arrayOfObject.reduce((accum, value) => {
        accum[value.name] = (accum[value.name] || 0) + value.score;
        // console.log(`the values are: ${accum[value.name]}`)
        return accum;
    }, {});
};
console.log(`the values are: ${JSON.stringify(makeGroupOfScore(arrayInput))}`);
console.log(makeGroupOfScore(arrayInput));
function sumScoresByName(scores) {
    return scores.reduce((accumulator, currentValue) => {
        // If the name already exists, add the score to the existing value
        accumulator[currentValue.name] = (accumulator[currentValue.name] || 0) + currentValue.score;
        return accumulator;
    }, {});
}
const scores = [
    { name: "Alice", score: 10 },
    { name: "Bob", score: 5 },
    { name: "Alice", score: 7 },
    { name: "Bob", score: 3 },
    { name: "Charlie", score: 15 }
];
console.log(sumScoresByName(arrayInput)); // Expected output: { "Alice": 17, "Bob": 8, "Charlie": 15 }
