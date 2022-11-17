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
        // if the root does not exist return false
        if (this.root === null) return false;

        // make our current variable and found
        let current = this.root;
        let found = false;

        // while current still exists and found is false keep looping
        while (current && !found) {
            
            // check to see if val is equals to, greater than, or less than our current.val
            if (val < current.val) {

                // if val is less than our current.val move left
                current = current.left;

            } else if (val > current.val) {

                // if val is greater than our current.val move right
                current = current.right;
            } else {

                // else if our val is equals to our current.val return true
                return true;
            }
        }
        // if never found return false
        return false;
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
console.log(tree.find(23));