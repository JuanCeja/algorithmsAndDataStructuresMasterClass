// Binary Search Tree - insert Exercise

// Write a function on the BinarySearchTree class

// insert - accepts a value and inserts it into the BST in the correct position. The function should return the binary search tree. 

// =======================================================================================================================================================================================

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
        
    }
}

let binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.root.value) // 15
console.log(binarySearchTree.root.right.value) // 20
console.log(binarySearchTree.root.left.right.value) // 12