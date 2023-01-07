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
        if(!this.root) return undefined;
        if(this.root.value === val) return true;
        let current = this.root;
        while(true) {
            if(current.value === val) return true;
            if(val < current.value) {
                if(current.left) current = current.left;
                else return undefined;
            } else {
                if(current.right) current = current.right;
                else return undefined;
            }
        }
    }
}

let binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(210);
binarySearchTree.insert(12);
console.log(binarySearchTree.find(15)); // true
console.log(binarySearchTree.find(210)); // true
console.log(binarySearchTree.find(20)); // true
console.log(binarySearchTree.find(10)); // true
console.log(binarySearchTree.find(12)); // true
console.log(binarySearchTree.find(99)); // undefined
console.log(binarySearchTree.find(7)); // undefined
console.log(binarySearchTree.find(-7)); // undefined