type outputType = {
    [stringLength: number]: string[]
}

const groupByLength = (inputArrya: string[]): outputType=>{

    const objectToreturn: outputType = {}
    inputArrya.forEach((element:string) => {

        const lengthValue = element.length
        if(!objectToreturn[lengthValue]){
            objectToreturn[lengthValue] = []
        }
        objectToreturn[lengthValue].push(element)
    });
return objectToreturn
  
}




const input = ["apple", "banana", "pear", "peach", "plum", "grape", "kiwi", "mango", "pineapple", "melons", "date", "pear"];
const result = groupByLength(input)

console.log(result)

export{}