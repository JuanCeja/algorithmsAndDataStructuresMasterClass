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
        // start at the root

        // check if there is a root, if not were done return false

        // if there is a root, check if the value of the new node is the value we are looking for
        // if found were done

        // if it is greater
            // check to see if there is a node to the right
                // if there is, move to that node and repeate these steps
                // if there is not, were done searching

        // if it is less
            // check to see if there is a node to the left
                // if there is, move to that node and repeat these steps
                // if there is not, were done searching
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(17);
tree.insert(4);
tree.insert(19);
tree.insert(15);
tree.insert(5);
tree.insert(3);
console.log(tree);