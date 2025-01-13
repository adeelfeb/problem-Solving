---

### 🌳 **Problem Statement: Is It a Valid Binary Search Tree (BST)?** 🌟  

You're given a binary tree structure represented by the `TreeNode` class.  
The goal is to determine whether the given tree satisfies the properties of a Binary Search Tree (BST):  

1️⃣ **Left Subtree Rule:** All values in the left subtree of a node must be **less than** the node's value.  
2️⃣ **Right Subtree Rule:** All values in the right subtree of a node must be **greater than** the node's value.  
3️⃣ **Recursion Depth:** These rules apply **recursively** to every node in the tree.  

---

### 🛠️ **Code Overview** 🛠️  

👨‍💻 **TreeNode Class:**  
Defines the structure of a tree node with:  
- `val`: The value of the node 🌟  
- `left`: Pointer to the left child 🌲  
- `right`: Pointer to the right child 🌲  

🔍 **Function: `isBST(root)`**  
Validates whether the given tree is a BST using:  
1. A **helper function `validate`** that keeps track of the allowable range (`min` and `max`) for node values.  
2. Starts validation with an initial range of `(-Infinity, Infinity)`.  
3. Recursively traverses each node, updating ranges to ensure correctness.  

---

### 🌟 **Example Usage** 🌟  

🌲 **Sample Tree Structure:**  
```
        5
       / \
      3   7
     / \  / \
    1   4 6  8
```

✅ **Output:** `true`  
✨ This tree satisfies all BST rules!

---

### 🚀 **Key Highlights:**  
- **Base Case:** If a node is `null`, it's valid.  
- **Range Check:** Node value must fall **strictly** within the range (`min`, `max`).  
- **Recursion:** Validates both left and right subtrees.

--- 

### 🎯 **Run Code:**  
```typescript
console.log(isBST(tree)); // Outputs: true
```  

✨ Efficient, simple, and recursive!