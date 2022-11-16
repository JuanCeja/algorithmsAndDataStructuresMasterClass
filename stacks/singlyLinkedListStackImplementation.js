// we want to start of by creating our Stack class and Node class
// in a STACK we add to the BEGINNING and remove from the BEGINNING
// in a QUEUE we add to the END and remove from the BEGINNING

// a STACK is a LIFO method. Last In First Out


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
        // if there are no nodes in the stack, return null
        if(!this.first) return null;

        // create a temporary variable to store the first property on the stack
        let temp = this.first;

        // if there is only 1 node, set the first and last property to be null
        if(this.first === this.last) {
            this.last = null;
        } 

        // if there is more than one node, set the first property to be the next property on the current first
        this.first = this.first.next;
        

        // decrement the size by 1
        this.size--;

        // return the value of the node removed
        return temp.val;
    }
}

let stack = new Stack();
console.log('first', stack.push('first'));
console.log('second', stack.push('second'));
console.log('third', stack.push('third'));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());