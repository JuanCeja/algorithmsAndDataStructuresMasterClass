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
                } else {
                    current = current.left
                }
            } else if (val > current.val) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }
}

let tree = new BinarySearchTree();
console.log(tree)
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));
console.log(tree.insert(7));
