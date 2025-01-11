### **🔹 Question:**

💡 **Task:** Create a TypeScript function that groups numbers from an array into **even** and **odd** categories. The function should return an object with **"even"** and **"odd"** as keys, each containing an array of numbers from the input array that belong to that category. 🎯

Example input:
```typescript
groupByEvenOdd([2, 3, 5, 3, 234, 4, 6, 7, 8, 9, 90, 43, 3, 12, 34, 5, 6, 4])
```

Expected output:
```json
{
  "even": [2, 234, 4, 6, 8, 90, 12, 34, 6, 4],
  "odd": [3, 5, 3, 7, 9, 43, 3, 5]
}
```

---

### **🚀 Code Explanation:**

```typescript
type outputType = {
    [key: string]: number[]  // Defines the structure of the object, where each key is a string ("even" or "odd"), and the value is an array of numbers.
}

// Function to group numbers into even and odd categories
const groupByEvenOdd = (inputArray: number[]): outputType => {
    const outputArray: outputType = {}; // Initialize an empty object to store the grouped numbers.

    inputArray.forEach((value: number) => {  // Loop through each number in the input array.
        let category: string = "";  // Variable to hold the category ("even" or "odd").

        if (value % 2 === 0) {  // Check if the number is even.
            category = "even";
        } else {
            category = "odd";  // If it's not even, it's odd.
        }

        if (!outputArray[category]) {  // If the category doesn't exist in the object, initialize an empty array for it.
            outputArray[category] = [];
        }

        outputArray[category].push(value);  // Push the number into the appropriate category.
    });

    return outputArray;  // Return the grouped object.
}

// Example input array of numbers
const inputArray = [2, 3, 5, 3, 234, 4, 6, 7, 8, 9, 90, 43, 3, 12, 34, 5, 6, 4];

// Call the function to group the numbers into even and odd categories
console.log(groupByEvenOdd(inputArray));

export {};
```

---

### **🔑 Key Concepts:**

1. **TypeScript Types**: 🏷️ We defined the `outputType` to ensure our object holds arrays of numbers under keys **"even"** and **"odd"**.

2. **Array Iteration**: 🔄 The `forEach()` method is used to loop through the input array and check each number's parity (even or odd). ⚖️

3. **Dynamic Object Keys**: 🗝️ We dynamically add numbers to the object under either the **"even"** or **"odd"** key based on their value.

---

### **🔍 Example Input & Output:**

Input:

```typescript
[2, 3, 5, 3, 234, 4, 6, 7, 8, 9, 90, 43, 3, 12, 34, 5, 6, 4]
```

Output:

```json
{
  "even": [2, 234, 4, 6, 8, 90, 12, 34, 6, 4],
  "odd": [3, 5, 3, 7, 9, 43, 3, 5]
}
```

---

### **🛠️ How It Works:**

1. **Input**: We pass an array of numbers (e.g., `[2, 3, 5, 3, 234, 4, 6, 7, 8, 9, 90, 43, 3, 12, 34, 5, 6, 4]`).
2. **Processing**: The function loops through the numbers and checks if each is **even** or **odd**. It then adds the numbers to their respective category. 📊
3. **Result**: The function returns an object with **"even"** and **"odd"** categories, each containing an array of numbers. 🔢

---

### **🚀 Fun Fact:** 

Grouping numbers into even and odd categories is a great way to organize data for analysis! 📊 For example, you can calculate the sum of even and odd numbers separately or perform specific operations based on the category. 🎲

---

### **💥 Demo:**

```json
{
  "even": [2, 234, 4, 6, 8, 90, 12, 34, 6, 4],
  "odd": [3, 5, 3, 7, 9, 43, 3, 5]
}
```

Now you can group numbers effortlessly with just a simple function! 🎉