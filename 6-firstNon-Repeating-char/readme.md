### **Problem: Find the First Non-Repeating Character**

#### **Problem Statement**  
Write a function in TypeScript that takes a string as input and returns the first non-repeating character in that string. If all characters repeat, return `null`.

#### **Example Input & Output**  
```typescript
console.log(firstNonRepeatingChar("typescript")); // "y"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("developer")); // "d"
console.log(firstNonRepeatingChar("swiss")); // "w"
```

### **Detailed Explanation**

#### **Problem Understanding**

The task requires us to identify the first character in a string that does not repeat, meaning its count in the string is one. If such a character is found, return it. If no such character exists (i.e., all characters repeat), return `null`.

To solve this, we need to:
- Count the occurrences of each character in the string.
- Identify the first character that appears only once.

#### **Plan**

To efficiently solve the problem, we can follow a two-pass approach:

1. **First Pass (Counting Occurrences)**:  
   - Traverse through the input string once to count how many times each character appears. This can be achieved using a `Map` or an object to store each character's frequency.

2. **Second Pass (Identifying the First Unique Character)**:  
   - After counting the frequencies, traverse the string again. This time, we check for the first character that has a frequency of `1` in the map or object. This character is the first non-repeating character.

3. **Return the Character or Null**:  
   - If we find a character with a frequency of `1`, return it immediately.
   - If no such character is found by the end of the second loop, return `null`.

#### **Data Structures and Time Complexity**

We will use a **Map** (or a JavaScript object) to store the character counts. A `Map` allows for efficient lookups and insertions with an average time complexity of `O(1)`.

- **Space Complexity**: The space complexity is `O(k)`, where `k` is the number of unique characters in the string. In the worst case, for a string with all unique characters, this would be `O(n)`, where `n` is the length of the string.
  
- **Time Complexity**:  
  - **First pass**: Iterating through the string to count character occurrences takes `O(n)` time.
  - **Second pass**: Checking the frequency of each character also takes `O(n)` time.
  
  Overall, the time complexity of the solution is `O(n)`, which is efficient for this problem.

#### **Solution in TypeScript**

```typescript
const firstNonRepeatingChar = (inputString: string): string | null => {
    // Step 1: Count occurrences of each character
    const charCount: Map<string, number> = new Map();
    for (const char of inputString) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Step 2: Find the first non-repeating character
    for (const char of inputString) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // Step 3: If no unique character found, return null
    return null;
};

// Test cases
console.log(firstNonRepeatingChar("typescript")); // "y"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("developer")); // "d"
console.log(firstNonRepeatingChar("swiss")); // "w"
```

#### **How the Code Works**

1. **Counting Occurrences**:
   - We iterate over each character of the string and update its count in the `Map`. If the character already exists in the map, we increment its value; if it doesn't, we set its count to 1.
   
2. **Identifying the First Non-Repeating Character**:
   - After building the frequency map, we loop through the string again. For each character, we check its count in the `Map`. If its count is `1`, we immediately return that character as the first non-repeating character.

3. **Edge Case**:
   - If no non-repeating character exists, the second loop will complete, and we return `null`.

### **Edge Cases Considered**
- **All Characters Repeating**: If all characters in the string repeat, we will return `null`.
- **Empty String**: If the input string is empty, we return `null` since there are no characters to check.
- **Single Character String**: If the string has only one character, it is non-repeating by definition, so we return that character.
  
### **Time Complexity and Space Complexity Recap**
- **Time Complexity**: `O(n)` (where `n` is the length of the input string), as we make two passes over the string.
- **Space Complexity**: `O(k)`, where `k` is the number of unique characters in the string. In the worst case, this is `O(n)` if all characters are unique.

### **Conclusion**
This approach is both time-efficient and space-efficient for the problem. By using a `Map` to track character counts and performing two passes over the string, we ensure that the solution works in linear time (`O(n)`), which is optimal for this type of problem.