type outputType = {
    [key: string]: string[]
}

const groupByFirstLetter = (inputArray: string[]):outputType=>{
    const outputArray: outputType = {}
    inputArray.forEach(element => {
        let firstLetter = element[0].toUpperCase()
        if(!outputArray[firstLetter]){
            outputArray[firstLetter] = []
        }
        outputArray[firstLetter].push(element)
    });

    return outputArray
}


const input = ["apple", "banana", "avocado", "blueberry", "cherry", "cantaloupe", "carrot"];
const result = groupByFirstLetter(input);

console.log(result);  // Expected output: { A: ["apple", "avocado"], B: ["banana", "blueberry"], C: ["cherry", "cantaloupe", "carrot"] }

export {};