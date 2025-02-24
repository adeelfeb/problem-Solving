const lengthOfLongestSubstring = (inputString: string):number=>{

    let left = 0; 
    let maxLength = 0;
    let charMap = new Map<string, number>(); 
    for (let right = 0; right < inputString.length; right++) {
        if(charMap.has(inputString[right]) &&  charMap.get(inputString[right])! >= left){
            left = charMap.get(inputString[right])! + 1
        }
        charMap.set(inputString[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}



// Example Test Cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
console.log(lengthOfLongestSubstring(""));         // Output: 0
console.log(lengthOfLongestSubstring("abcdef"));   // Output: 6