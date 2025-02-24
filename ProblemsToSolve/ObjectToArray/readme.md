# ✨ Problem: Filtering and Mapping Objects to Array 🌟

### Problem Statement  
You are given an array of `person` objects where each object contains a person's name and age. The task is to:
1. **Filter** the people with an age of **5 or older**.
2. **Extract** their names and return them as an array of strings.

### Example  
#### Input:  
```typescript
[
    { name: "Jim5", age: 5 },
    { name: "tim3", age: 3 },
    { name: "tim7", age: 7 },
    { name: "kim8", age: 8 },
    { name: "nim2", age: 2 }
]
```

#### Output:  
```typescript
["Jim5", "tim7", "kim8"]
```

---

# 💡 Solution Explanation  

The solution involves:
1. **Using the `filter` method**: The `filter` method is used to select the people whose age is greater than or equal to 5.  
2. **Using the `map` method**: After filtering, the `map` method is used to extract the `name` of each person and return them as a new array.

---

# 📝 Code  

```typescript
interface PersonObject {
    name: string;
    age: number;
}

const personTo: PersonObject[] = [
    { name: "Jim5", age: 5 },
    { name: "tim3", age: 3 },
    { name: "tim7", age: 7 },
    { name: "kim8", age: 8 },
    { name: "nim2", age: 2 }
];

// Function to filter and map person objects
const objectToArray = (personsObject: PersonObject[]): string[] => {
    return personsObject
        .filter((person: PersonObject) => person.age >= 5)  // Filter people with age >= 5
        .map((person) => person.name);  // Map to extract names
}

console.log(`The array of names is: ${objectToArray(personTo)}`);
```

---

# 📖 Detailed Explanation  

### Step-by-Step Process  
1. **Input Data**:  
   - The input is an array of objects where each object contains a `name` (string) and `age` (number) for a person.

2. **Function Definition**:  
   - The `objectToArray` function takes an array of `person` objects as input and returns an array of `string`s (the names of people who are 5 or older).

3. **Using the `filter` Method**:  
   - The `filter` method is used to select only the objects where the `age` property is greater than or equal to 5.

4. **Using the `map` Method**:  
   - After filtering, the `map` method extracts the `name` property from each remaining object, and returns a new array containing those names.

5. **Returning the Result**:  
   - The filtered and mapped array is returned, containing only the names of people whose age is 5 or older.

### Input Example:  
```typescript
[
    { name: "Jim5", age: 5 },
    { name: "tim3", age: 3 },
    { name: "tim7", age: 7 },
    { name: "kim8", age: 8 },
    { name: "nim2", age: 2 }
]
```

### Process:  
- **Filtering**: Only people with age greater than or equal to 5 are selected:  
  - Jim5 (age 5)  
  - tim7 (age 7)  
  - kim8 (age 8)

- **Mapping**: Extract the `name` of the selected people:  
  - Jim5  
  - tim7  
  - kim8

### Output:  
```typescript
["Jim5", "tim7", "kim8"]
```

---

# 🔗 Resources  
- [MDN: `Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)  
- [MDN: `Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  

---

# 🚀 Try It Yourself  
### Steps to Run the Code:  
1. Save the code in a file, e.g., `filterNames.ts`.  
2. Compile the code with TypeScript:  
   ```bash
   tsc filterNames.ts
   ```  
3. Run the compiled JavaScript file:  
   ```bash
   node filterNames.js
   ```  

---

# 🎉 Final Output  
```bash
The array of names is: Jim5,tim7,kim8
```  