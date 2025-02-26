Sure! Here’s another **TypeScript programming problem** that focuses on **asynchronous programming**, **error handling**, and **data transformation**. This problem will challenge your ability to work with **Promises**, **async/await**, and **TypeScript's type system**.

---

### **Problem: Bookstore Inventory Management**

You are building a **Bookstore Inventory Management System** that fetches book data from multiple sources, processes the data, and generates a consolidated report. Your task is to implement this system using TypeScript.

---

#### **Requirements**

1. **Book Interface**:
   - Define a `Book` interface with the following properties:
     - `title` (string): The title of the book.
     - `author` (string): The author of the book.
     - `price` (number): The price of the book.
     - `inStock` (boolean): Whether the book is in stock.

2. **Mock API Functions**:
   - Create two mock API functions that simulate fetching book data:
     - `fetchBooksFromAPI1(): Promise<Book[]>`: Simulates fetching data from API 1.
     - `fetchBooksFromAPI2(): Promise<Book[]>`: Simulates fetching data from API 2.
   - These functions should return a `Promise` that resolves to an array of `Book` objects after a random delay (to simulate network latency).

3. **Consolidate Book Data**:
   - Create a function `consolidateBookData(): Promise<Book[]>` that:
     - Fetches book data from both APIs concurrently.
     - Merges the data into a single array of `Book` objects.
     - Removes duplicate books (books with the same `title` and `author`).
     - Sorts the books by `price` in ascending order.

4. **Error Handling**:
   - Handle errors gracefully. If one API fails, use the data from the other API. If both APIs fail, throw an error.

5. **Bonus**:
   - Add a `discount` field to the `Book` interface and apply a 10% discount to books that are not in stock.
   - Implement a retry mechanism for failed API calls (e.g., retry up to 3 times).

---

#### **Example Usage**

```typescript
async function main() {
  try {
    const consolidatedBooks = await consolidateBookData();
    console.log("Consolidated Book Data:", consolidatedBooks);
  } catch (error) {
    console.error("Failed to fetch book data:", error);
  }
}

main();
```

---

#### **Starter Code**

```typescript
interface Book {
  title: string;
  author: string;
  price: number;
  inStock: boolean;
}

// Mock API 1
function fetchBooksFromAPI1(): Promise<Book[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15, inStock: true },
        { title: "1984", author: "George Orwell", price: 10, inStock: false },
      ]);
    }, Math.random() * 2000); // Random delay up to 2 seconds
  });
}

// Mock API 2
function fetchBooksFromAPI2(): Promise<Book[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12, inStock: true },
        { title: "1984", author: "George Orwell", price: 10, inStock: false },
      ]);
    }, Math.random() * 2000); // Random delay up to 2 seconds
  });
}

async function consolidateBookData(): Promise<Book[]> {
  // Implement this function
}

// Example usage
async function main() {
  try {
    const consolidatedBooks = await consolidateBookData();
    console.log("Consolidated Book Data:", consolidatedBooks);
  } catch (error) {
    console.error("Failed to fetch book data:", error);
  }
}

main();
```

---

#### **Hints**

1. Use `Promise.allSettled` to fetch data from both APIs concurrently and handle errors gracefully.
2. Use a `Set` or a custom function to remove duplicate books based on `title` and `author`.
3. Use the `sort` method to sort the books by `price`.
4. For the bonus, use the `map` method to apply a discount to books that are not in stock.

---

#### **Expected Output**

Your solution should:
1. Fetch data from both APIs concurrently.
2. Merge the data into a single array.
3. Remove duplicate books.
4. Sort the books by `price`.
5. Handle errors gracefully.

Example output:

```typescript
Consolidated Book Data: [
  { title: "1984", author: "George Orwell", price: 10, inStock: false },
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12, inStock: true },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15, inStock: true }
]
```

---

Let me know if you need further clarification or hints while solving this problem! 😊