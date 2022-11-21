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
        // create our new node
        let newNode = new Node(val);

        // check to see if there is a root, if not set our newNode to be the root
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        // our variable to use to iterate the tree starting from the root
        let current = this.root;

        // our loop to keep running until we find a condition to break out
        while (true) {

            // if val === current.val return undefined. do this to avoid duplicates
            if (val === current.val) return undefined;

            // if our val is less than our current.val we traverse to the left
            if (val < current.val) {

                // if there is no left that will be the spot for our newNode and return our tree
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                // if not, then we go left and continue searching
                current = current.left
            } else {
                // if our val is greater than our current.val we traverse to the right


                // if there is no right that will be the spot for our newNode and return our tree
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                // if not, then we go right and continue searching
                current = current.right;
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
