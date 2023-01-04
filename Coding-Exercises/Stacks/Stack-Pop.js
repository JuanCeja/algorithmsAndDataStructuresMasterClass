// Stacks - pop Exercise

// Implement the following methods on the Stack class

// pop - removes the node at the top of the stack and returns the value of that node.

// Note: The tests for pop rely on push working (it has been implemented for you)

// ========================================================================================================================================================================================

class Node {
    constructor(val) {
        this.val = val;
    }
}

class Stack {
    constructor(val) {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            var tmp = this.first;
            this.first = node;
            this.first.next = tmp;
        }
        return ++this.size;
    }
    pop() {
        if (this.size === 0) return 0;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
            return --this.size;
        }
        let tmp = this.first.val;
        this.first = this.first.next;
        this.size--;
        return tmp;
    }
}

let stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
