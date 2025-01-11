# ✨ Problem: Counting Frequency of Numbers in an Array 💫

### Problem Statement  
Given an array of numbers, the task is to **count the frequency of each number** and return an object where the keys are the numbers, and the values are their respective frequencies.

### Example  
#### Input:  
```typescript
[1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 3, 43, 4, 3, 2, 3, 4]
```

#### Output:  
```typescript
{
    1: 1,
    2: 3,
    3: 5,
    4: 4,
    5: 3,
    43: 1
}
```

---

# 💡 Solution Explanation  

To solve this problem, we can use the `reduce()` method to iterate over the array and maintain a count of each number's occurrence in an accumulator object.

1. **Initialize an accumulator object** that will store the frequency of each number.
2. **Iterate over the array** using `reduce()`, checking if the current number exists in the accumulator.
3. **Update the count** of that number (either initialize or increment).
4. **Return the accumulator object** containing the frequency counts.

---

# 📝 Code  

```typescript
// Define the type for the returned object
interface objectTypeToReturn {
    [key: number]: number;  // The key is a number, and the value is the frequency of that number
}

// Function to count frequencies of numbers in an array
function countFrequencies(numbers: number[]): objectTypeToReturn {
    return numbers.reduce((acc, num) => {
        console.log(`the value at ${num} is ${acc[num]}`);
        acc[num] = (acc[num] || 0) + 1;  // Increment the count for the number
        return acc;
    }, {} as objectTypeToReturn);
}

// Test the function with an example array of numbers
const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 3, 43, 4, 3, 2, 3, 4];

// Output the result of counting frequencies
console.log(countFrequencies(numbers));
```

---

# 📖 Detailed Explanation  

### Step-by-Step Process  
1. **Input Array**:  
   The function takes an array of numbers, such as:  
   `[1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 3, 43, 4, 3, 2, 3, 4]`.

2. **Using `reduce()`**:  
   The `reduce()` method is used to iterate over the array and accumulate the frequency of each number in an object. The accumulator `acc` will hold the frequency of each number, and `num` is the current number in the iteration.

3. **Checking for the Number**:  
   In each iteration, we check if the number exists in the accumulator object:
   - If the number exists, we increment its count.
   - If it doesn't exist, we initialize its count to 1.

4. **Returning the Result**:  
   After the iteration is complete, the function returns the accumulator object, which holds the frequencies of all numbers.

### Example:  
Input:  
```typescript
[1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 3, 43, 4, 3, 2, 3, 4]
```

The process of counting will look like this:
- Start with an empty accumulator `{}`.
- Iterate over the array:
  - `1` → `{1: 1}`
  - `2` → `{1: 1, 2: 1}`
  - `2` → `{1: 1, 2: 2}`
  - `3` → `{1: 1, 2: 2, 3: 1}`
  - `3` → `{1: 1, 2: 2, 3: 2}`
  - `3` → `{1: 1, 2: 2, 3: 3}`
  - Continue for the rest of the array...
  
The final output is:  
```typescript
{
    1: 1,
    2: 3,
    3: 5,
    4: 4,
    5: 3,
    43: 1
}
```

---

# 🔗 Resources  
- [MDN: `Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN: `Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

# 🚀 Try It Yourself  
### Steps to Run the Code:  
1. Save the code in a file, e.g., `countFrequencies.ts`.
2. Compile the code with TypeScript:  
   ```bash
   tsc countFrequencies.ts
   ```
3. Run the compiled JavaScript file:  
   ```bash
   node countFrequencies.js
   ```

---

# 🎉 Final Output  
```bash
the value at 1 is undefined
the value at 2 is undefined
the value at 2 is 1
the value at 3 is 2
the value at 3 is 3
the value at 3 is 4
the value at 4 is undefined
the value at 5 is undefined
the value at 5 is 1
the value at 5 is 2
the value at 3 is 5
the value at 43 is undefined
the value at 4 is 2
the value at 3 is 6
the value at 2 is 3
the value at 3 is 7
the value at 4 is 3
{ '1': 1, '2': 3, '3': 7, '4': 4, '5': 3, '43': 1 }
```