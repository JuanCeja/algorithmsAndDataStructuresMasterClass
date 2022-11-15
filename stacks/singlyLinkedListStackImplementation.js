// we want to start of by creating our Stack class and Node class

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        // the function should accept a value
        // create a new node with that value
        let newNode = new Node(val);

        // if there are no nodes in the stack, set the first and the last property to be the new node
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // if there is at least one node, create a variable that stores the current first property on the stack
            let tempFirst = this.first;

            // reset the first property to be the newly created node 
            this.first = newNode;

            // set the next property on the node to be the previously created variable
            this.first.next = tempFirst;
        }
        // increment the size of the stack by 1
        this.size++;
        return this.size;
        // we can also do all that in 1 line
        // return ++this.size;
    }

    pop() {
        
    }
}

let stack = new Stack();
stack.push('first');
stack.push('second');
stack.push('third');
console.log(stack);