### **Problem: Implement a Least Recently Used (LRU) Cache in TypeScript**

#### **Problem Statement:**
Design and implement a **Least Recently Used (LRU) Cache** in TypeScript. The cache should support two operations:

- `get(key: number): number` – Returns the value associated with the key if it exists in the cache; otherwise, returns `-1`.
- `put(key: number, value: number): void` – Inserts or updates the key-value pair in the cache. If the cache reaches its capacity, it should remove the least recently used item before inserting a new one.

Both operations should run in **O(1) time complexity**.

#### **Example Usage:**
```typescript
const lruCache = new LRUCache(2);
lruCache.put(1, 10); // Cache: {1=10}
lruCache.put(2, 20); // Cache: {1=10, 2=20}
console.log(lruCache.get(1)); // Returns 10
lruCache.put(3, 30); // Evicts key 2, Cache: {1=10, 3=30}
console.log(lruCache.get(2)); // Returns -1 (not found)
lruCache.put(4, 40); // Evicts key 1, Cache: {3=30, 4=40}
console.log(lruCache.get(1)); // Returns -1 (not found)
console.log(lruCache.get(3)); // Returns 30
console.log(lruCache.get(4)); // Returns 40
```

---

## **Solution Explanation:**

To efficiently implement the LRU Cache, we use a **JavaScript `Map` object**, which maintains the order of insertion. The `Map` data structure allows us to perform insertions, deletions, and lookups in **O(1) time complexity**.

### **Class Structure:**
```typescript
class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }
```
- **`capacity`**: Stores the maximum number of elements the cache can hold.
- **`cache`**: A `Map<number, number>` to store key-value pairs while maintaining order.

---

### **`get(key: number): number`**
```typescript
    get(key: number): number {
        if (!this.cache.has(key)) {
            return -1;
        }

        const value = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return value;
    }
```
- **Step 1:** Check if the key exists in the cache using `this.cache.has(key)`. If not, return `-1`.
- **Step 2:** Retrieve the value associated with the key (`this.cache.get(key)!`).
- **Step 3:** Delete the key from the cache and reinsert it at the end, marking it as recently used.
- **Step 4:** Return the retrieved value.

💡 **Why do we delete and reinsert the key?**
- The `Map` maintains the order of insertion. By reinserting the key, we ensure that the most recently accessed keys stay at the end.

---

### **`put(key: number, value: number): void`**
```typescript
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        
        this.cache.set(key, value);

        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value!;
            this.cache.delete(firstKey);
        }
    }
```
- **Step 1:** If the key already exists, remove it from the cache (to update its position).
- **Step 2:** Insert the new key-value pair at the end.
- **Step 3:** If the cache exceeds its capacity, remove the **least recently used** item (the first inserted key). We retrieve the first key using `this.cache.keys().next().value!` and delete it.

💡 **Why use `this.cache.keys().next().value`?**
- The `Map.keys()` method returns an iterator over the keys in order of insertion.
- `next().value` retrieves the first key in the iterator (i.e., the least recently used key).

---

## **Time Complexity Analysis**
| Operation | Time Complexity | Explanation |
|-----------|----------------|-------------|
| `get(key)` | **O(1)** | Lookup in `Map`, deletion, and reinsertion are O(1) operations. |
| `put(key, value)` | **O(1)** | Insertion, deletion, and checking the cache size are all O(1). |

### **Space Complexity**
- **O(capacity)** since we store at most `capacity` elements in the `Map`.

---

## **Final Code Implementation**
```typescript
class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        if (!this.cache.has(key)) {
            return -1;
        }

        const value = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return value;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        
        this.cache.set(key, value);

        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value!;
            this.cache.delete(firstKey);
        }
    }
}

const lruCache = new LRUCache(2);
lruCache.put(1, 10); // Cache: {1=10}
lruCache.put(2, 20); // Cache: {1=10, 2=20}
console.log(lruCache.get(1)); // Returns 10
lruCache.put(3, 30); // Evicts key 2, Cache: {1=10, 3=30}
console.log(lruCache.get(2)); // Returns -1 (not found)
lruCache.put(4, 40); // Evicts key 1, Cache: {3=30, 4=40}
console.log(lruCache.get(1)); // Returns -1 (not found)
console.log(lruCache.get(3)); // Returns 30
console.log(lruCache.get(4)); // Returns 40

export {};
```

---

### **Key Takeaways**
✅ **We used a `Map` to track key-value pairs efficiently.**  
✅ **`get(key)` moves the accessed key to the end to mark it as recently used.**  
✅ **`put(key, value)` removes the least recently used key when the cache exceeds capacity.**  
✅ **All operations are O(1), making this implementation optimal.**  

🚀 **This LRU Cache efficiently handles key retrieval and updates while maintaining constant time complexity!**

