class Node {
    constructor(value) {
        this.value = value;
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

        // starting at the root
        // check if there is a root, if not - the root now becomes that new node.
        // if there is a root, check if the value of the new node is greater than or less than the value
            // if it is greater
            // check to see if there is a node to the right
            // if there is, move to that node and repeat these steps
            // if there is not, add that node as the right property

            // if it is less than
            // check to see if there is a node to the left
                // if there is, move to that node and repeat these steps
                // if there is not, add that node as the left property
            
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);