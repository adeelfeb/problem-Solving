const firstNonRepeatingChar = (inputString: string): string | null => {
    const charCount: Map<string, number> = new Map();

    // Step 1: Count occurrences of each character
    for (const char of inputString) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Step 2: Find the first non-repeating character
    for (const char of inputString) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // Step 3: If no unique character found, return null
    return null;
};

// Test cases
console.log(firstNonRepeatingChar("typescript")); // "y"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("developer")); // "d"
console.log(firstNonRepeatingChar("swiss")); // "w"
