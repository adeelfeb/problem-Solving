# ✨ Problem: Capitalize Strings in an Array 🌟  

### Problem Statement  
You are given an array of strings. The task is to create a function that:  
1. Converts the first letter of each string to uppercase.  
2. Converts the remaining letters of each string to lowercase.  
3. Returns a new array with the transformed strings.  

### Example  
#### Input:  
```typescript
["here", "there", "Now", "thEn"]
```  
#### Output:  
```typescript
["Here", "There", "Now", "Then"]
```  

---

# 💡 Solution Explanation  

The solution involves:  
1. **Using the `map` Method**: Iterate over each string in the array.  
2. **Transforming the String**: 
   - Extract the first character and capitalize it using `charAt(0).toUpperCase()`.  
   - Convert the rest of the string to lowercase using `slice(1).toLocaleLowerCase()`.  
3. **Combining the Results**: Concatenate the transformed parts and return the updated array.  

---

# 📝 Code  

```typescript
const capitalize = (array: string[]): string[] => {
    return array.map((value: string) => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLocaleLowerCase();
    });
};

const arrayToCheck = ["here", "there", "Now", "thEn"];
console.log(`${capitalize(arrayToCheck)}`);

export {};
```

---

# 📖 Detailed Explanation  

### Step-by-Step Process  
1. **Function Definition**:  
   - The function `capitalize` accepts an array of strings as input.  

2. **Mapping Over the Array**:  
   - `array.map()` is used to apply a transformation function to each element of the array.  

3. **Capitalizing Each String**:  
   - `value.charAt(0).toUpperCase()`: Converts the first character of the string to uppercase.  
   - `value.slice(1).toLocaleLowerCase()`: Extracts the rest of the string (starting from the second character) and converts it to lowercase.  

4. **Returning the New Array**:  
   - The transformed strings are returned in a new array.

### Input Example:  
```typescript
["here", "there", "Now", "thEn"]
```

### Transformation Steps:  
- "here" → "Here"  
- "there" → "There"  
- "Now" → "Now"  
- "thEn" → "Then"  

### Output:  
```typescript
["Here", "There", "Now", "Then"]
```

---

# 🔗 Resources  
- [MDN: `String.prototype.charAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)  
- [MDN: `String.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)  
- [MDN: `String.prototype.toUpperCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)  
- [MDN: `Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  

---

# 🚀 Try It Yourself  
### Steps to Run the Code:  
1. Save the code in a file, e.g., `capitalizeArray.ts`.  
2. Compile the code with TypeScript:  
   ```bash
   tsc capitalizeArray.ts
   ```  
3. Run the compiled JavaScript file:  
   ```bash
   node capitalizeArray.js
   ```  

---

# 🎉 Final Output  
```bash
Here,There,Now,Then
```  