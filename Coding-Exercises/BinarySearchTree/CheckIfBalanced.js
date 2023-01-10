// Binary Search Tree Exercise - Check if balanced

// Write a function on the BinarySearchTree class

// isBalanced - returns true if the BST is balanced, otherwise returns false.

// A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.

// ============================================================================================================================================================================================

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    isBalanced() {
        let isBalanced = true;
        checkBST(this.root);

        function checkBST(root) {
            if (!root) return 0;
            let lCount = checkBST(root.left);
            let rCount = checkBST(root.right);
            if (!isBalanced) return 0;
            if (Math.abs(lCount - rCount) > 1) {
                isBalanced = false;
            } else {
                return (lCount + rCount) + 1;
            }
        }
        return isBalanced;
    }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.isBalanced()); // true

let binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(6);
console.log(binarySearchTree2.isBalanced()); // true
binarySearchTree2.insert(7);
console.log(binarySearchTree2.isBalanced()); // false