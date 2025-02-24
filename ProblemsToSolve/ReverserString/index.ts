function reverseString(str: string): string {
    const result = str.split("").reverse().join("")
    return result
}

const stringTest = "Hi there now"
const result = reverseString(stringTest)
console.log("The string is:", result)

export {}