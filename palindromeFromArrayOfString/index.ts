type outputType = {
    [key: string]: string| null
}

const longestPalindrome = (inputArray: string[]): outputType => {
    const outputArray: outputType = {}

    inputArray.forEach(element => {
        let firstLetter = element[0].toUpperCase()

        // If the element is a palindrome, proceed
        if (element.split("").reverse().join("") === element) {
        
            // Add the palindrome element to the group
            if(!outputArray[firstLetter] || element.length > outputArray[firstLetter]?.length){

                outputArray[firstLetter] = element
            }
        } else {
            // If the element is not a palindrome, initialize the group as null if not already
            if (!outputArray[firstLetter]) {
                outputArray[firstLetter] = null
            }
        }
    });

    // Ensure groups with only non-palindromes are set to null
    Object.keys(outputArray).forEach(key => {
        if (outputArray[key]?.length === 0) {
            outputArray[key] = null
        }
    });

    return outputArray
}

const input = ["level", "apple", "madam", "banana", "civic", "radar", "noon", "grape", "gag", "ciiviic", "cat", "civic"];
console.log(longestPalindrome(input))
