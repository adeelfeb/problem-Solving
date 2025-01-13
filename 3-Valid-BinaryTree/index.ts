class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function isFullBinaryTree(root: TreeNode | null): boolean {
    // Your implementation goes here
    function validateTree(node: TreeNode | null): boolean{
        if(node === null) return true
        if (node.left === null && node.right !== null) {
            return false; // Has only right child
        }
        if (node.left !== null && node.right === null) {
            return false; // Has only left child
        }
        
        return validateTree(node.left) && validateTree(node.right)
        
    }
    return validateTree(root)
}

// Example usage:
const tree = new TreeNode(1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(isFullBinaryTree(tree)); // Should output true


export {}





