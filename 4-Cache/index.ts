

class LRUCache{
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        if(!this.cache.has(key)){
            return -1
        }

        const value = this.cache.get(key)!
        this.cache.delete(key)
        this.cache.set(key, value)
        
        return value
    }

    put(key: number, value: number): void{
        if(this.cache.has(key)){
            this.cache.delete(key)
        }
        
        this.cache.set(key, value)

        if(this.cache.size > this.capacity){
            const firstKey = this.cache.keys().next().value!
            this.cache.delete(firstKey)
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


export{}