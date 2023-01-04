// Stacks - push Exercise

// Implement the following methods on the Stack class

// push - takes in a node and puts it at the top of the stack.Should return the new size of the stack.

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
        this.array = [];
    }
    push(val) {
        let newNode = new Node(val);

        if(!this.first) {
            this.array[0] = newNode;
            this.first = this.array[0];
            this.last = this.array[0];
        } else {
            this.array[this.array.length] = newNode;
            this.first = this.array[this.array.length - 1];
        }
        this.size++;
        return this.size;
    }
}


let stack = new Stack();

console.log(stack.push(10)); // 1
console.log(stack.push(100)); // 2
console.log(stack.push(1000)); // 3
