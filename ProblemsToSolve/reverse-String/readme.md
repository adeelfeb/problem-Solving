# ✨ Problem: Reversing a String 💫

### Problem Statement  
Given a string, the task is to **reverse** the string and return the reversed version.

### Example  
#### Input:  
```typescript
"hello ther now"
```

#### Output:  
```typescript
"won reh olleh"
```

---

# 💡 Solution Explanation  

The solution uses the following steps:
1. **Split the String**: Convert the string into an array of characters using the `split("")` method.
2. **Reverse the Array**: Reverse the order of the characters using the `reverse()` method.
3. **Join the Array Back into a String**: Reassemble the array of characters into a string using the `join("")` method.

---

# 📝 Code  

```typescript
let str = "hello world"

// Function to reverse the string
const reverseString = (stringto: string): string => {
    let newString: string = stringto.split("").reverse().join("")  // Split, reverse and join the string
    return newString
}

console.log("Here is the string:", reverseString("hello ther now"))
```

---

# 📖 Detailed Explanation  

### Step-by-Step Process  
1. **Input String**:  
   The function takes an input string, such as `"hello ther now"`, and processes it.

2. **Splitting the String**:  
   - The `split("")` method converts the string into an array of individual characters.
   - For example:  
     `"hello ther now"` becomes `["h", "e", "l", "l", "o", " ", "t", "h", "e", "r", " ", "n", "o", "w"]`.

3. **Reversing the Array**:  
   - The `reverse()` method reverses the order of the array elements.
   - After reversal, the array becomes:  
     `["w", "o", "n", " ", "r", "e", "h", " ", "t", "o", "l", "l", "e", "h"]`.

4. **Joining the Array Back into a String**:  
   - The `join("")` method merges the elements of the array back into a string without any separator between them.
   - The final string is: `"won reh olleh"`.

5. **Returning the Result**:  
   The function returns the reversed string.

### Input Example:  
```typescript
"hello ther now"
```

### Process:  
- **Splitting**:  
  `["h", "e", "l", "l", "o", " ", "t", "h", "e", "r", " ", "n", "o", "w"]`
  
- **Reversing**:  
  `["w", "o", "n", " ", "r", "e", "h", " ", "t", "o", "l", "l", "e", "h"]`
  
- **Joining**:  
  `"won reh olleh"`

### Output:  
```typescript
"won reh olleh"
```

---

# 🔗 Resources  
- [MDN: `String.prototype.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)  
- [MDN: `Array.prototype.reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)  
- [MDN: `Array.prototype.join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

---

# 🚀 Try It Yourself  
### Steps to Run the Code:  
1. Save the code in a file, e.g., `reverseString.ts`.  
2. Compile the code with TypeScript:  
   ```bash
   tsc reverseString.ts
   ```  
3. Run the compiled JavaScript file:  
   ```bash
   node reverseString.js
   ```  

---

# 🎉 Final Output  
```bash
Here is the string: won reh olleh
```