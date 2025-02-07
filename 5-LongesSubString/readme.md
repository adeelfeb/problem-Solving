### Problem Statement:
The problem is to find the length of the longest substring without repeating characters in a given string. For example:
- For the string `"abcabcbb"`, the longest substring without repeating characters is `"abc"`, so the length is `3`.
- For the string `"bbbbb"`, the longest substring without repeating characters is `"b"`, so the length is `1`.
- For the string `"pwwkew"`, the longest substring without repeating characters is `"wke"`, so the length is `3`.

### Approach to Solve the Problem:
The solution uses the **Sliding Window** technique, which is a common approach for solving substring-related problems. Here's how it works:

1. **Initialize Pointers and Variables**:
   - `left`: Represents the start of the current substring.
   - `maxLength`: Tracks the maximum length of the substring found so far.
   - `charMap`: A `Map` that stores the most recent index of each character in the string.

2. **Iterate Through the String**:
   - Use a `right` pointer to iterate through the string from the beginning to the end.
   - For each character at the `right` index:
     - If the character already exists in the `charMap` and its index is greater than or equal to `left`, it means the character is repeating within the current substring. Move the `left` pointer to the right of the previous occurrence of this character to start a new substring.
     - Update the `charMap` with the current character and its index.
     - Calculate the length of the current substring (`right - left + 1`) and update `maxLength` if this length is greater than the current `maxLength`.

3. **Return the Result**:
   - After the loop ends, `maxLength` will hold the length of the longest substring without repeating characters.

### Code Explanation:

```typescript
const lengthOfLongestSubstring = (inputString: string): number => {
    let left = 0; // Start of the current substring
    let maxLength = 0; // Maximum length of substring found so far
    let charMap = new Map<string, number>(); // Stores the most recent index of each character

    for (let right = 0; right < inputString.length; right++) {
        // If the character is already in the map and its index is >= left, move left
        if (charMap.has(inputString[right]) && charMap.get(inputString[right])! >= left) {
            left = charMap.get(inputString[right])! + 1;
        }
        // Update the character's index in the map
        charMap.set(inputString[right], right);
        // Update maxLength if the current substring is longer
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
```

### Example Walkthrough:

#### Example 1: `"abcabcbb"`
- Iteration:
  - `right = 0`: Character `'a'` is added to `charMap`. `maxLength = 1`.
  - `right = 1`: Character `'b'` is added to `charMap`. `maxLength = 2`.
  - `right = 2`: Character `'c'` is added to `charMap`. `maxLength = 3`.
  - `right = 3`: Character `'a'` is already in `charMap` at index `0`. Move `left` to `1`. `maxLength` remains `3`.
  - `right = 4`: Character `'b'` is already in `charMap` at index `1`. Move `left` to `2`. `maxLength` remains `3`.
  - `right = 5`: Character `'c'` is already in `charMap` at index `2`. Move `left` to `3`. `maxLength` remains `3`.
  - `right = 6`: Character `'b'` is already in `charMap` at index `4`. Move `left` to `5`. `maxLength` remains `3`.
  - `right = 7`: Character `'b'` is already in `charMap` at index `6`. Move `left` to `7`. `maxLength` remains `3`.
- Result: `3`.

#### Example 2: `"bbbbb"`
- Iteration:
  - `right = 0`: Character `'b'` is added to `charMap`. `maxLength = 1`.
  - `right = 1`: Character `'b'` is already in `charMap` at index `0`. Move `left` to `1`. `maxLength` remains `1`.
  - `right = 2`: Character `'b'` is already in `charMap` at index `1`. Move `left` to `2`. `maxLength` remains `1`.
  - `right = 3`: Character `'b'` is already in `charMap` at index `2`. Move `left` to `3`. `maxLength` remains `1`.
  - `right = 4`: Character `'b'` is already in `charMap` at index `3`. Move `left` to `4`. `maxLength` remains `1`.
- Result: `1`.

#### Example 3: `"pwwkew"`
- Iteration:
  - `right = 0`: Character `'p'` is added to `charMap`. `maxLength = 1`.
  - `right = 1`: Character `'w'` is added to `charMap`. `maxLength = 2`.
  - `right = 2`: Character `'w'` is already in `charMap` at index `1`. Move `left` to `2`. `maxLength` remains `2`.
  - `right = 3`: Character `'k'` is added to `charMap`. `maxLength = 2`.
  - `right = 4`: Character `'e'` is added to `charMap`. `maxLength = 3`.
  - `right = 5`: Character `'w'` is already in `charMap` at index `2`. Move `left` to `3`. `maxLength` remains `3`.
- Result: `3`.

#### Example 4: `""` (Empty String)
- Iteration:
  - No characters are processed.
- Result: `0`.

#### Example 5: `"abcdef"`
- Iteration:
  - `right = 0`: Character `'a'` is added to `charMap`. `maxLength = 1`.
  - `right = 1`: Character `'b'` is added to `charMap`. `maxLength = 2`.
  - `right = 2`: Character `'c'` is added to `charMap`. `maxLength = 3`.
  - `right = 3`: Character `'d'` is added to `charMap`. `maxLength = 4`.
  - `right = 4`: Character `'e'` is added to `charMap`. `maxLength = 5`.
  - `right = 5`: Character `'f'` is added to `charMap`. `maxLength = 6`.
- Result: `6`.

### Time Complexity:
- The algorithm iterates through the string once, so the time complexity is **O(n)**, where `n` is the length of the string.

### Space Complexity:
- The space complexity is **O(min(m, n))**, where `m` is the size of the character set (e.g., ASCII, Unicode). In the worst case, the `charMap` stores all unique characters of the string.

### Conclusion:
This solution efficiently finds the length of the longest substring without repeating characters using the sliding window technique. It is optimal with a time complexity of **O(n)** and works well for all edge cases.