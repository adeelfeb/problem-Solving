### **🔹 Question:**

💡 **Task:** Create a TypeScript function that groups an array of strings based on their **first letter**. The function should return an object where the keys are the **first letters** (in uppercase), and the values are arrays containing all the strings that start with that letter. 🎯

Example input:
```typescript
groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry", "cantaloupe", "carrot"])
```

Expected output:
```json
{
  "A": ["apple", "avocado"],
  "B": ["banana", "blueberry"],
  "C": ["cherry", "cantaloupe", "carrot"]
}
```

---

### **🚀 Code Explanation:**

```typescript
type outputType = {
    [key: string]: string[]; // Defines the structure of the object where each key is a string (first letter), and the value is an array of strings.
}

// Function to group strings by the first letter
const groupByFirstLetter = (inputArray: string[]): outputType => {
    const outputArray: outputType = {}; // Initialize an empty object to store the grouped strings.

    inputArray.forEach(element => {  // Loop through each string in the input array.
        let firstLetter = element[0].toUpperCase();  // Extract the first letter and convert it to uppercase.

        if (!outputArray[firstLetter]) {  // If the key (first letter) doesn't exist in the object, initialize an empty array.
            outputArray[firstLetter] = [];
        }

        outputArray[firstLetter].push(element);  // Add the string to the array corresponding to its first letter.
    });

    return outputArray;  // Return the grouped object.
}

// Example input array of strings
const input = ["apple", "banana", "avocado", "blueberry", "cherry", "cantaloupe", "carrot"];

// Call the function to group the strings by the first letter
const result = groupByFirstLetter(input);

// Log the result
console.log(result);

export {};
```

---

### **🔑 Key Concepts:**

1. **TypeScript Types**: 🏷️ The `outputType` ensures that our object holds arrays of strings under dynamic keys (the first letters of the strings).

2. **String Manipulation**: ✨ The `toUpperCase()` method is used to ensure that all first letters are in uppercase.

3. **Dynamic Object Keys**: 🗝️ We dynamically group strings based on the first letter of each string and store them in an object.

---

### **🔍 Example Input & Output:**

Input:

```typescript
["apple", "banana", "avocado", "blueberry", "cherry", "cantaloupe", "carrot"]
```

Output:

```json
{
  "A": ["apple", "avocado"],
  "B": ["banana", "blueberry"],
  "C": ["cherry", "cantaloupe", "carrot"]
}
```

---

### **🛠️ How It Works:**

1. **Input**: We pass an array of strings (e.g., `["apple", "banana", "avocado", "blueberry", "cherry", "cantaloupe", "carrot"]`).
2. **Processing**: The function loops through each string and extracts the first letter. It then checks if the letter already exists as a key in the result object and pushes the string into the corresponding array. 🔠
3. **Result**: The function returns an object where the keys are the uppercase first letters, and the values are arrays containing all strings starting with that letter. 📚

---

### **🚀 Fun Fact:**

Grouping strings by their first letter is a great way to organize data for searching, categorization, or displaying items in alphabetical order! 📖💡

---

### **💥 Demo:**

```json
{
  "A": ["apple", "avocado"],
  "B": ["banana", "blueberry"],
  "C": ["cherry", "cantaloupe", "carrot"]
}
```

Now you can easily group strings by their first letter in just a few lines of code! 🎉