## **Debouncing in TypeScript: Explanation & Example**

### **What is Debouncing?**
Debouncing is a programming technique used to **delay the execution of a function** until after a certain period of inactivity. This is useful in scenarios where an event (like user input) triggers frequently, but you want to optimize performance by reducing the number of function calls.

---

### **📌 Where is Debouncing Used?**
- **Search Inputs:** Prevents sending API requests for every keystroke, instead waits until the user stops typing.
- **Button Clicks:** Prevents multiple clicks triggering an expensive operation.
- **Window Resize Events:** Reduces the number of times a function is called when resizing the window.

---

### **🔹 Example: Debouncing in TypeScript**
In this example, we'll debounce an input field so that the function runs only after the user stops typing for **300ms**.

```typescript
function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
        // Clear the previous timeout to reset the timer
        clearTimeout(timeoutId);

        // Set a new timeout to execute the function after the specified delay
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Example: Debouncing an Input Event
const searchAPI = (query: string) => {
    console.log(`Searching for: ${query}`);
};

// Wrap the function with debounce to delay execution
const debouncedSearch = debounce(searchAPI, 300);

// Simulate a user typing in a search box
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello"); // Only this will execute after 300ms
```

---

### **🔹 Explanation:**
1. The `debounce` function:
   - **Takes two arguments:**  
     - `func`: The function to debounce.
     - `delay`: The delay time in milliseconds.
   - **Returns a new function** that wraps `func` and ensures it only runs after the delay period.
   - Uses `setTimeout()` to schedule execution and `clearTimeout()` to cancel any previous timer.
  
2. The `searchAPI` function simulates an API request.
3. We wrap `searchAPI` with `debounce`, creating `debouncedSearch`.
4. When `debouncedSearch("Hel")`, `debouncedSearch("Hell")`, and `debouncedSearch("Hello")` are called in quick succession, **only the last call** (`Hello`) executes after 300ms.

---

### **📌 Real-World Usage Example in React (TypeScript)**
If you're using React with TypeScript, you can use the debounce function in an input field.

```tsx
import React, { useState } from "react";

// Debounce function
function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

const SearchComponent: React.FC = () => {
    const [query, setQuery] = useState("");

    const searchAPI = (query: string) => {
        console.log(`Searching for: ${query}`);
    };

    // Debounce the search function
    const debouncedSearch = debounce(searchAPI, 500);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
        debouncedSearch(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchComponent;
```

---

### **🔹 Why Use Debouncing?**
✅ **Improves Performance** - Prevents unnecessary API calls.  
✅ **Optimized UI Experience** - Users won’t experience lag or unnecessary processing.  
✅ **Better Control Over Event Handling** - Ensures execution happens only after a user stops performing an action.

Would you like an example with **throttling** as well? 🚀