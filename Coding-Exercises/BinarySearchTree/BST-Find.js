// findIteratively

// This function should find a node in a binary tree. It should return the node if found, otherwise return `undefined`. This should be solved using iteration or recursion. The tests for this method assume that insertIteratively has been implemented correctly.

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
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        };
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value > current.value) {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    break;
                }
            } else {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = newNode;
                    break;
                }
            }
        };
        return this;
    }

    find(val) {
        
    }
}

let binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
console.log(binarySearchTree.find(15));
console.log(binarySearchTree.find(20));
console.log(binarySearchTree.find(10));
console.log(binarySearchTree.find(12));
console.log(binarySearchTree.find(99));
console.log(binarySearchTree.find(7));
console.log(binarySearchTree.find(-7));