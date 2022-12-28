// ================== DEPTH FIRST **POST ORDER** ========================

// There are 2 ways of traversing a tree and they are:
// Breadth-first Search
// Depth-first Search (there are 3 different orders within depth first search)

// DFS basically means that they pursue all nodes, they visit or traverse nodes vertically down until the end of the tree before visiting sibling nodes. It means that we're going to traverse down until we hit the end of the tree at some point.
// Were working DOWN first DEPTH first rather HORIZONTALLY BREADTH first.

// IN ORDER: Were going to traverse the entire left side, THEN *visit* the node and THEN traverse the entire right side. 

//        10
//    6        15
//  3   8          20

// this should output = [3, 6, 8, 10, 15, 20]

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
        let data = [];
        let queue = [];
        let node = this.root;
        
        if (!this.root) return undefined;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val)
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    
    DepthFirstPreOrder() {
        let current = this.root;
        let data = [];
        
        if (!this.root) return undefined;
        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };
        traverse(current);
        return data;
    }
    
    DepthFirstPostOrder() {
        let data = [];
        let current = this.root;
        
        if(!this.root) return undefined;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(current);
        return data;
    }
    
    DepthFirstInOrder() {
        // create a variable to store the values of nodes visited
        // store the root of the BST in a variable called current
        let data = [];
        let current = this.root;
        
        // write a helper function which accepts a node
        function traverse(node) {
            // if the node has a left property, call the helper function with the left property on the node
            if(node.left) traverse(node.left)
            
            // push the values of the node to the variable that stores the values
            data.push(node.val)
            
            // if the node has a right property, call the helper function with the right property on the node
            if(node.right) traverse(node.right)
            
        }
        // invoke the helper function with the current variable
        traverse(current);
        
        // return our data
        return data;
    }
    
};

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log('BFS', tree.BreadthFirstSearch());
console.log('DFS-PreOrder', tree.DepthFirstPreOrder());
console.log('DFS-PostOrder', tree.DepthFirstPostOrder());
console.log('DFS-InOrder', tree.DepthFirstInOrder());

// BFS = [10, 6, 15, 3, 8, 20]
// DFS Pre Order output = [10, 6, 3, 8, 15, 20]
// DFS Post Order output = [3, 8, 6, 20, 15, 10]
// DFS In Order output = [3, 6, 8, 10, 15, 20]
