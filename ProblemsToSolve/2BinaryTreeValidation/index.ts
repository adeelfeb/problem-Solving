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

function isBST(root: TreeNode | null): boolean {
    // Helper function to validate the tree with min/max boundaries
    function validate(node: TreeNode | null, min: number, max: number): boolean {
        // If we reach a null node, it's valid by definition
        if (node === null) return true;
        
        // The current node must be between the min and max boundaries
        if (node.val <= min || node.val >= max) {
            return false;
        }

        // Recursively check the left and right subtrees
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
    
    // Start the validation with the full range (-Infinity, Infinity)
    return validate(root, -Infinity, Infinity);
}

// Example usage:
const tree = new TreeNode(5, 
    new TreeNode(3, new TreeNode(1), new TreeNode(4)),
    new TreeNode(7, new TreeNode(6), new TreeNode(8))
);

console.log(isBST(tree)); // Should output true
