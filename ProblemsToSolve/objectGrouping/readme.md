# ✨ Problem: Grouping and Summing Scores by Name 🌟  

### Problem Statement  
You are given an array of objects, where each object contains a person's name and their score. The task is to group the scores by name and sum them up. If there are multiple entries for the same person, their scores should be added together.

### Example  
#### Input:  
```typescript
[
    { name: "Alice", score: 10 },
    { name: "Bob", score: 5 },
    { name: "Alice", score: 7 },
    { name: "Bob", score: 3 },
    { name: "Charlie", score: 15 }
]
```  
#### Output:  
```typescript
{
    "Alice": 17,
    "Bob": 8,
    "Charlie": 15
}
```  

---

# 💡 Solution Explanation  

The solution involves:
1. **Using the `reduce` function**: The `reduce` method iterates through the array of objects and accumulates the sum of scores grouped by name.  
2. **Using an accumulator object**: The accumulator will store the sum of scores for each person using the name as the key.  
3. **Handling multiple entries**: When a name appears more than once, we simply add the score to the existing value in the accumulator.

---

# 📝 Code  

```typescript
const arrayInput = [
    { name: "Alice", score: 10 },
    { name: "Bob", score: 5 },
    { name: "Alice", score: 7 },
    { name: "Bob", score: 3 },
    { name: "Charlie", score: 15 }
];

interface OutputObject {
    [key: string]: number;
}

interface InputObject {
    name: string;
    score: number;
}

// Function to group and sum scores by name
const makeGroupOfScore = (arrayOfObject: InputObject[]): OutputObject => {
    return arrayOfObject.reduce((accum: { [key: string]: number }, value: InputObject) => {
        accum[value.name] = (accum[value.name] || 0) + value.score;
        return accum;
    }, {} as OutputObject);
};

console.log(`The values are: ${JSON.stringify(makeGroupOfScore(arrayInput))}`);
console.log(makeGroupOfScore(arrayInput));  // Expected output: { "Alice": 17, "Bob": 8, "Charlie": 15 }
```

---

# 📖 Detailed Explanation  

### Step-by-Step Process  
1. **Input Data**:  
   - The input is an array of objects, where each object contains a person's `name` and their `score`.

2. **Function Definition**:  
   - The function `makeGroupOfScore` takes the input array and returns an object where the key is the person's name and the value is the sum of their scores.

3. **Using `reduce` Method**:  
   - The `reduce` method iterates through each object in the array. For each object, it checks if the name already exists in the accumulator object. If it does, it adds the score to the existing value. If it doesn't, it initializes the score for that name.

4. **Accumulator**:  
   - The accumulator (`accum`) is an object that stores the sum of scores for each name. The `name` is used as the key, and the `score` is added to the existing value using `accum[value.name] = (accum[value.name] || 0) + value.score`.

5. **Returning the Result**:  
   - After iterating through the array, the accumulator object is returned, which contains the summed scores grouped by name.

### Input Example:  
```typescript
[
    { name: "Alice", score: 10 },
    { name: "Bob", score: 5 },
    { name: "Alice", score: 7 },
    { name: "Bob", score: 3 },
    { name: "Charlie", score: 15 }
]
```

### Process:  
- For `"Alice"`, the total score is `10 + 7 = 17`.  
- For `"Bob"`, the total score is `5 + 3 = 8`.  
- For `"Charlie"`, the total score is `15`.

### Output:  
```typescript
{
    "Alice": 17,
    "Bob": 8,
    "Charlie": 15
}
```

---

# 🔗 Resources  
- [MDN: `Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  
- [MDN: `Object` in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

# 🚀 Try It Yourself  
### Steps to Run the Code:  
1. Save the code in a file, e.g., `groupScores.ts`.  
2. Compile the code with TypeScript:  
   ```bash
   tsc groupScores.ts
   ```  
3. Run the compiled JavaScript file:  
   ```bash
   node groupScores.js
   ```  

---

# 🎉 Final Output  
```bash
The values are: {"Alice":17,"Bob":8,"Charlie":15}
```  

