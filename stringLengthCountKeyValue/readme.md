### **🔹 Question:**

💡 **Task:** Write a TypeScript function that groups an array of strings by their lengths. The function should return an object where the **keys** represent the **lengths** of the strings and the **values** are **arrays** containing strings of that length. 🎯

Example input:
```typescript
groupByLength(["apple", "banana", "pear", "peach", "plum", "grape", "kiwi", "mango", "pineapple", "melons", "date", "pear"])
```

Expected output:
```json
{
  "3": ["kiwi", "date"],
  "4": ["pear", "plum"],
  "5": ["apple", "grape", "mango"],
  "6": ["banana", "peach", "melon"],
  "9": ["pineapple"]
}
```

---

### **🚀 Code Explanation:**

```typescript
type outputType = {
    [stringLength: number]: string[]  // Defines an object where the key is the string length and the value is an array of strings.
}

// Function to group strings by their length
const groupByLength = (inputArrya: string[]): outputType => {
    const objectToreturn: outputType = {}; // Initialize an empty object to store the grouped results.

    inputArrya.forEach((element: string) => {  // Iterate over each string in the input array.
        const lengthValue = element.length;  // Get the length of the current string.

        if (!objectToreturn[lengthValue]) {  // If this length doesn't exist in the result object, create an empty array for it.
            objectToreturn[lengthValue] = [];
        }

        objectToreturn[lengthValue].push(element);  // Push the string into the array for the corresponding length.
    });

    return objectToreturn;  // Return the object containing the grouped strings by their lengths.
}

// Example input array of strings
const input = ["apple", "banana", "pear", "peach", "plum", "grape", "kiwi", "mango", "pineapple", "melons", "date", "pear"];

// Call the function to group the strings by their lengths
const result = groupByLength(input);

// Output the result
console.log(result);

export {};
```

---

### **🔑 Key Concepts:**

1. **TypeScript Types**: 🏷️ We defined the `outputType` to ensure our object follows a proper structure, where keys are numbers (string lengths) and values are arrays of strings.

2. **Array Iteration**: 🔄 The `forEach()` method is used to loop through the input array and check each string's length. 🎈

3. **Dynamic Object Keys**: 🗝️ By using the length of each string as a key, we create dynamic properties in the `objectToreturn` object and group strings accordingly.

---

### **🔍 Example Input & Output:**

Input:

```typescript
["apple", "banana", "pear", "peach", "plum", "grape", "kiwi", "mango", "pineapple", "melons", "date", "pear"]
```

Output:

```json
{
  "3": ["kiwi", "date"],
  "4": ["pear", "plum"],
  "5": ["apple", "grape", "mango"],
  "6": ["banana", "peach", "melon"],
  "9": ["pineapple"]
}
```

---

### **🛠️ How It Works:**

1. **Input**: We provide an array of strings (fruits).
2. **Processing**: The function loops through the array, calculates the length of each string, and places it into the correct group in the output object. 📊
3. **Result**: The function returns an object where the key is the string length, and the value is an array of strings with that length. 🔢

---

### **🚀 Fun Fact:** 

Grouping items by length can help when you need to categorize data! 🧩 In this case, we've grouped fruits based on the number of letters in their names! 🍏🍌

