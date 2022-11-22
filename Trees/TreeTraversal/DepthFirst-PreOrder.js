// ================== DEPTH FIRST **PRE ORDER** ========================

// There are 2 ways of traversing a tree and they are:
// Breadth-first Search
// Depth-first Search (there are 3 different orders within depth first search)

// DFS basically means that they pursue all nodes, they visit or traverse nodes vertically down the end of the tree before visiting sibling nodes. It means that we're going to traverse down until we hit the end of the tree at some point.
// Were working DOWN first DEPTH first rather HORIZONTALLY BREADTH first.

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
        
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.insert(14);
console.log(tree.BreadthFirstSearch());