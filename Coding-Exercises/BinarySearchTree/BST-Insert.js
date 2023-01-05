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
        let newNode  = new Node(value);
        if(this.root === null) this.root = newNode;
        // if there is a root, check if the value of the new node is greater than or less than the value of the root

            // if it is greater
                // check to see if there is a node to the right
                    // if there is, move to that node and repeat these steps
                    // if there is not, add that node as the right property and return tree
                
            // if it is less
                // check to see if there is a node to the left
                    // if there is, move to that node and repeat these steps
                    // if there is not, add that node as the left property and return tree
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