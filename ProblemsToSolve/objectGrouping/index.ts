const arrayInput = [
    { name: "Alice", score: 10 },
    { name: "Bob", score: 5 },
    { name: "Alice", score: 7 },
    { name: "Bob", score: 3 },
    { name: "Charlie", score: 15 }
]

interface outputObject{
    [key: string]: number
}

interface inputObject{
    name: string,
    score: number
}

const makeGroupOfScore = (arrayOfObject: inputObject[]): outputObject=>{
    return arrayOfObject.reduce((accum:{ [key: string]: number }, value: inputObject)=>{
        accum[value.name] = (accum[value.name] || 0) + value.score
        // console.log(`the values are: ${accum[value.name]}`)
        return accum
    }, {} as outputObject)
}


console.log(`the values are: ${JSON.stringify(makeGroupOfScore(arrayInput))}`)
console.log(makeGroupOfScore(arrayInput))
//  __-------------------------------->>>>>>>>>>>>>>.

interface ScoreObject {
    name: string;
    score: number;
}

function sumScoresByName(scores: ScoreObject[]): { [key: string]: number } {
    return scores.reduce((accumulator: { [key: string]: number }, currentValue: ScoreObject) => {
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

console.log(sumScoresByName(arrayInput));  // Expected output: { "Alice": 17, "Bob": 8, "Charlie": 15 }

// {
//     "Alice": 17,
//     "Bob": 8,
//     "Charlie": 15
// }

export{}


