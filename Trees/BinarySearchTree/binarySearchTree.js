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
        // create new node
        let newNode = new Node(val);

        // starting at the root
        let current = this.root;

        // check if there is a root, if not - the root now becomes that new node.
        if (!this.root) {
            this.root = newNode;
        } else {

            // if there is a root, check if the value of the new node is greater than or less than the value
            // if it is greater
            if(newNode.val > current.val) {
                // check to see if there is a node to the right
                // if there is, move to that node and repeat these steps
                while(current.right) {
                    current = current.right;

                    // if there is not, add that node as the right property
                    if(!current.right) {
                        current.right = newNode;
                        return this;
                    }
                }

            } else {
                // if it is less than
                // check to see if there is a node to the left
                // if there is, move to that node and repeat these steps
                while(current.left) {
                    current = current.left;
                }
                // if there is not, add that node as the left property
                if(!current.left) {
                    current.left = newNode;
                    return this;
                }
            }

        }

    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);