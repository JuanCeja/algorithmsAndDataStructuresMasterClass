// ================== BREADTH FIRST SEARCH ========================

// There are 2 ways of traversing a tree and they are: 
// Breadth-first Search
// Depth-first Search (there are 3 different orders within depth first search)

// BFS just means we want to visit every node on the same level, every sibling node before we look at a child.

//        10
//    6        15
//  3   8          20

//        ---> 10
//    ---> 6 --->  15  --->
//  ---> 3   8 --->  20  ---->

// In BFS this would look like [10, 6, 15, 3, 8, 20]

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
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left
            } else {
                if (current.right === null) {
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
            } else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BreadthFirstSearch() {
        // create a queue (this can be an array) and a variable to store the values of nodes visited
        let queue = [];
        let data = [];
        let node = this.root;

        // place the root node in the queue
        queue.push(node);

        // loop as long as there is anything in the queue
        while(queue.length) {
            // dequeue a node from the queue and push the value of the node into the variable that stores the nodes
            node = queue.shift();
            data.push(node.val);
            
            // if there is a left property on the node dequeued - add it to the queue
            if(node.left) queue.push(node.left)
            
            // if there is a right property on the node dequeued - add it to the queue
            if(node.right) queue.push(node.right)
        }
        // return the variable that stores the values
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
console.log(tree.BreadthFirstSearch());