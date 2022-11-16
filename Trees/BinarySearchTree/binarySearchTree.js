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
        // check if there is a root, if not - the root now becomes that new node.
        if(this.root === null) {
            this.root = newNode;
        } 

        // if there is a root, check if the value of the new node is greater than or less than the value
        if(this.root) {
            // if it is greater
            if(newNode.val > this.root.val) {
                // check to see if there is a node to the right
                while(current.right) {
                    // if there is, move to that node and repeat these steps
                    current = current.right
                }
                // if there is not, add that node as the right property
                if(!current.right) {
                    current.right = newNode;
                }
            } else {
                // check to see if there is a node to the left
                while(current.left) {
                    // if there is, move to that node and repeat these steps
                    current = current.left
                }
                // if there is not, add that node as the left property
                if(!current.left) {
                    current = current.left;
                }
            }
        }
        return this;
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);