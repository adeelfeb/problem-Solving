type outputType = { [key: string]: string[]}

const anagramGrouping = (arrayOfString: string[]):outputType=>{
    const map: outputType = {}

    arrayOfString.forEach(element => {
        let sortedString = element.split("").sort().join("")
        if(!map[sortedString]){
            map[sortedString] = []
        }
        map[sortedString].push(element)


    });
    // return map
    // Return the grouped anagrams as an array of arrays
    return map;
}


const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = anagramGrouping(words)
const result2 = Object.values(result)
console.log(result2, result)

export{}