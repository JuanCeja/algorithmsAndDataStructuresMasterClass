// Binary Search Tree - DFS Exercise

// Implement the following functions on the BinarySearchTree.prototype. insert has been implemented for you to help with testing.



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

    DFSPreOrder() {
        if (!this.root) return undefined;

        let data = [];
        let current = this.root;

        let helperFunction = (node) => {
            data.push(node.value)
            if (node.left) helperFunction(node.left);
            if (node.right) helperFunction(node.right);
        }
        helperFunction(current);
        return data;
    }

    DFSInOrder() {
        if (!this.root) return undefined;

        let data = [];
        let current = this.root;

        let helperFunction = (node) => {
            if (node.left) helperFunction(node.left);
            data.push(node.value)
            if (node.right) helperFunction(node.right);
        }
        helperFunction(current);
        return data;
    }

    DFSPostOrder() {
        if (!this.root) return undefined;

        let data = [];
        let current = this.root;

        let helperFunction = (node) => {
            if (node.left) helperFunction(node.left);
            if (node.right) helperFunction(node.right);
            data.push(node.value)
        }
        helperFunction(current);
        return data;
    }

    BFS() {
        // create a queue and a variable to store the values of nodes visited

        // place the root node in the queue

        // loop as long as there is anything in the queue

            // dequeue a node from the queue and push the value of the node into the variable that stores the nodes

            // if there is a left property on the node queued - add it to the queue

            // if there is a right property on the node queued - add it to the queue

        // return the variable that stores the values
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());

// BFS = [10, 6, 15, 3, 8, 20]

// DFS Pre Order output = [10, 6, 3, 8, 15, 20]
// DFS Post Order output = [3, 8, 6, 20, 15, 10]
// DFS In Order output = [3, 6, 8, 10, 15, 20]