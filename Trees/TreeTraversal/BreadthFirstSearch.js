// ================== BREADTH FIRST SEARCH ========================

// There are 2 ways of traversing a tree and they are: 
// Breadth-first Search
// Depth-first Search

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

class Tree {
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
        
    }
}

let tree = new Tree();
tree.insert(10);
tree.insert(17);
tree.insert(4);
tree.insert(19);
tree.insert(15);
tree.insert(5);
tree.insert(3);
console.log(tree.find());