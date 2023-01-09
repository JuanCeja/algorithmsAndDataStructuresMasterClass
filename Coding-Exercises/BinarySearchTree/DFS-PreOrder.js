// Binary Search Tree - DFS Exercise

// Implement the following functions on the BinarySearchTree.prototype. insert has been implemented for you to help with testing.

// DFSPreOrder

// This function should search through each node in the binary search tree using pre-order depth first search and return an array containing each node's value.

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
    depthFirstSearchPreOrder() {
        // create a variable to store the values of nodes visited

        // store the root of the BST in a variable called current

        // write a helper function which accepts a node

            // push the value of the node to the variable that stores the values

            // if the node has a left property, call the helper function with the left property on the node

            // if the node has a right property, call the helper function with the right property on the node

        // invoke the helper function with the current variable

        // return the array of values
    }
}

var binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(15)
binarySearchTree.insert(20)
binarySearchTree.insert(10)
binarySearchTree.insert(12)
binarySearchTree.insert(1)
binarySearchTree.insert(5)
binarySearchTree.insert(50);

console.log(binarySearchTree.DFSPreOrder()); // [15, 10, 1, 5, 12, 20, 50]