type outputType = {
    [key: string]: number[]
}

const groupByEvenOdd = (inputArray: number[]):outputType=>{
    const outputArray: outputType = {}
    inputArray.forEach((value: number)=>{
        let category: string = ""
        if(value % 2 === 0) {category = "even"}
        else{
            category = "odd"
        }
        if(!outputArray[category]){
            outputArray[category] = []
        }
        outputArray[category].push(value)
    })

    return outputArray
}

const inputArray = [2,3,5,3,234,4,6,7,8,9,90,43,3,12,34,5,6,4]
console.log(groupByEvenOdd(inputArray))

export{}