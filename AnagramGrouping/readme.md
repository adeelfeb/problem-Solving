# ✨ Problem: Grouping Anagrams from an Array of Strings 💡

### Problem Statement  
Given an array of strings, the goal is to group the strings that are **anagrams** together. Two strings are considered anagrams if they contain the same characters but may be in a different order.

### Example  
#### Input:  
```typescript
["eat", "tea", "tan", "ate", "nat", "bat"]
```

#### Output:  
```typescript
[
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"]
]
```

---

# 💡 Solution Explanation  

To solve this problem, we can use the following steps:

1. **Sort each string alphabetically** to create a unique identifier for each group of anagrams. For example, both `"eat"` and `"tea"` will be sorted to `"aet"`.
2. **Store the grouped anagrams** in an object, using the sorted string as the key and an array of anagrams as the value.
3. **Return the grouped anagrams** by extracting the values from the object.

### Steps:
1. **For each word in the array**, sort the characters in the word.
2. **Use the sorted string** as a key in an object to store the original word.
3. **Return the object values** as an array of grouped anagrams.

---

# 📝 Code  

```typescript
// Define the type for the input and output
type arrayOfarray = string[][];  // Array of arrays of strings
type outputType = { [key: string]: string[] };  // Object where key is the sorted string, and value is an array of anagrams

// Function to group anagrams
const anagramGrouping = (arrayOfString: string[]): outputType => {
    const map: outputType = {};  // Initialize an empty object to hold the groups

    // Iterate through each string in the array
    arrayOfString.forEach(element => {
        // Sort the string to get a unique identifier for the group of anagrams
        let sortedString = element.split("").sort().join("");
        
        // If the sorted string doesn't exist in the map, create an empty array for it
        if (!map[sortedString]) {
            map[sortedString] = [];
        }
        
        // Push the original string into the array of its respective anagram group
        map[sortedString].push(element);
    });
    
    // Return the grouped anagrams as an object
    return map;
}

// Test the function with an array of words
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = anagramGrouping(words);  // Group anagrams

// Extract the values (groups of anagrams) from the object
const result2 = Object.values(result);

console.log(result2);  // Output the grouped anagrams
console.log(result);  // Output the result object with anagram groups

export {};
```

---

# 📖 Detailed Explanation  

### Step-by-Step Process  
1. **Input Array**:  
   The function takes an array of strings, such as:  
   `["eat", "tea", "tan", "ate", "nat", "bat"]`.

2. **Sort Each String**:  
   Each word is sorted alphabetically to generate a "signature" for each group of anagrams. For example:
   - `"eat"` becomes `"aet"`
   - `"tea"` becomes `"aet"`
   - `"tan"` becomes `"ant"`

3. **Store in Object**:  
   The sorted string is used as a key in an object, and the original string is pushed to the corresponding array of anagrams. If a group with the sorted string key does not exist, an empty array is initialized.

4. **Return the Result**:  
   The result is returned as an object, but to display the groups of anagrams in an array format, we extract the values using `Object.values()`.

### Example:  
Input:  
```typescript
["eat", "tea", "tan", "ate", "nat", "bat"]
```

The process will work like this:
- `"eat"` → `"aet"` → Add to `map["aet"] = ["eat"]`
- `"tea"` → `"aet"` → Add to `map["aet"] = ["eat", "tea"]`
- `"tan"` → `"ant"` → Add to `map["ant"] = ["tan"]`
- `"ate"` → `"aet"` → Add to `map["aet"] = ["eat", "tea", "ate"]`
- `"nat"` → `"ant"` → Add to `map["ant"] = ["tan", "nat"]`
- `"bat"` → `"abt"` → Add to `map["abt"] = ["bat"]`

Final Output:  
```typescript
{
    "aet": ["eat", "tea", "ate"],
    "ant": ["tan", "nat"],
    "abt": ["bat"]
}
```

After using `Object.values()`, the result is:  
```typescript
[
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"]
]
```

---

# 🔗 Resources  
- [MDN: `Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN: `Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  
---

# 🚀 Try It Yourself  
### Steps to Run the Code:  

1. **Save Your Code**:  
   Save the TypeScript code (e.g., `index.ts`) into your project directory.

2. **Compile and Watch Your Code**:  
   Open your terminal or command prompt, navigate to your project directory, and run:
   ```bash
   npm run watch
   ```
   This will start TypeScript's watch mode, which will automatically compile your `.ts` files to `.js` whenever you make changes.

3. **Check the Output in the `dist/` Folder**:  
   After running the `npm run watch` command, TypeScript will compile the `.ts` files into `.js` files. Inside the `dist/` folder, a folder will be created with the same name as your source folder, and within it, a `.js` file corresponding to the original `.ts` file (e.g., `index.js`).

4. **Run the Compiled JavaScript File**:  
   To run your code, navigate to the `dist/` folder and execute the JavaScript file using Node.js:
   ```bash
   node dist/index/index.js
   ```

This will run your program and output the result in the terminal!`

---

# 🎉 Final Output  
```bash
[
    [ 'eat', 'tea', 'ate' ],
    [ 'tan', 'nat' ],
    [ 'bat' ]
]
```