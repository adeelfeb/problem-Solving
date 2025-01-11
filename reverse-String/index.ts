let str = "hello world"

const reverseString = (stringto: string): string=>{
    let newString: string = stringto.split("").reverse().join("")
    return newString
}

console.log("Here is the string:", reverseString("hello ther now"))