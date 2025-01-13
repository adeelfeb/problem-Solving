---

### 🌳 **Problem Statement: Is It a Full Binary Tree?** 🌟  

A **Full Binary Tree** (FBT) is defined as a binary tree where:  
1️⃣ Every node has either **0** or **2 children**.  
2️⃣ No node has exactly **1 child**.  

Your task is to determine whether a given binary tree satisfies this property.  

---

### 🛠️ **Code Overview** 🛠️  

👨‍💻 **TreeNode Class:**  
Defines the structure of a tree node with:  
- `val`: The value of the node 🌟  
- `left`: Pointer to the left child 🌲  
- `right`: Pointer to the right child 🌲  

🔍 **Function: `isFullBinaryTree(root)`**  
Validates whether the given tree is a Full Binary Tree using:  
1. A **helper function `validateTree(node)`** to check each node recursively.  
2. Base case: A `null` node is valid (it's a leaf node by definition).  
3. Checks whether every node has either:  
   - Both left and right children.  
   - No children at all.  
4. Returns `false` if a node has only one child.  

---

### 🌟 **Example Usage** 🌟  

🌲 **Sample Tree Structure:**  
```
        1
       / \
      2   3
     / \  / \
    4   5 6  7
```

✅ **Output:** `true`  
✨ This tree is a Full Binary Tree because every node has 0 or 2 children.

---

### 🚀 **Key Highlights:**  
- **Base Case:** A `null` node is considered valid.  
- **Strict Checks:** Ensures no node has only one child.  
- **Recursive Traversal:** Validates left and right subtrees recursively.  

---  

### 🎯 **Run Code:**  
```typescript
console.log(isFullBinaryTree(tree)); // Outputs: true
```  

✨ Clear, efficient, and adheres to the Full Binary Tree rules!