// Binary Search Tree Exercise - Find 2nd largest node

// Write a function on the BinarySearchTree class

// insert - accepts a value and inserts it into the BST in the correct position. The function should return the binary search tree.

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
        // only accept numbers....watch out since NaN is typeof number!
        if (typeof value === 'number' && !isNaN(value)) {
            // if there is nothing in the tree, start it off with a new node!
            if (this.root === null) {
                this.root = new Node(value);
                return this;
            }
            else {
                // current variable used for traversal, just like linked lists!
                var current = this.root;
                // keep looping till we get to the correct spot;
                while (true) {
                    if (value < current.value) {
                        // if there is nothing on the left
                        if (current.left === null) {
                            // make a new node and get out
                            current.left = new Node(value);
                            return this;
                        }
                        // otherwise, keep moving on!

                        else {
                            current = current.left;
                        }
                    }
                    else if (value > current.value) {
                        // if there is nothing on the right
                        if (current.right === null) {
                            // make a new node and get out
                            current.right = new Node(value);
                            return this;
                        } else {
                            current = current.right;
                        }
                    }
                    // otherwise it must be a duplicate so let's get out of here

                    else {
                        return "duplicate!";
                    }
                }
            }
        }
        else
            return "Please insert a number";
    }

    DFSInOrder() {
        let data = [];
        function traverse(node) {

            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        if (this.root === null) return null;
        traverse(this.root);
        return data;
    }

    findSecondLargest() {
        let data = this.DFSInOrder();
        if(data === null) return undefined;
        if(data.length === 0) return 0;
        if(data.length === 1) return 0;
        return data[data.length - 2];
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);

console.log(tree.findSecondLargest()); // 10