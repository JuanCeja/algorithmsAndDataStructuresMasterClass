// ================== DEPTH FIRST **PRE ORDER** ========================

// There are 2 ways of traversing a tree and they are:
// Breadth-first Search
// Depth-first Search (there are 3 different orders within depth first search)

// DFS basically means that they pursue all nodes, they visit or traverse nodes vertically down the end of the tree before visiting sibling nodes. It means that we're going to traverse down until we hit the end of the tree at some point.
// Were working DOWN first DEPTH first rather HORIZONTALLY BREADTH first.

// In PRE ORDER we first visit the node, collect the data and then proceed to its children left first then right. Same thing with the children, we recursively do the same, collect the data from those nodes visited then proceed to its children.

//        10
//    6        15
//  3   8          20

// this will give us [10, 6, 3, 8, 15, 20]

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            }
            else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BreadthFirstSearch() {
        let queue = [];
        let data = [];
        let node = this.root;

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DepthFirstPreOrder() {
        // create a variable to store the values of nodes visited
        let data = [];
        
        // store the root of the BST in a variable called current
        let current = this.root;

        // write a helper function(traverse) which accepts a node
        function traverse(node) {
            // push the value of the node to the variables that stores the values
            data.push(node.val)

            // if the node has a left property, call the helper function with the left property on the node
            if(node.left) traverse(node.left);

            // if the node has a right property, call the helper function with the right property on the node
            if(node.right) traverse(node.right);
        }
        // invoke the helper function with the current variable
        traverse(current);

        // return the array of values
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DepthFirstPreOrder());

// BFS = [10, 6, 15, 3, 8, 20]
// DFS Pre Order output = [10, 6, 3, 8, 15, 20]
// DFS Post Order output = [3, 8, 6, 20, 15, 10]
// DFS In Order output = [3, 6, 8, 10, 15, 20]