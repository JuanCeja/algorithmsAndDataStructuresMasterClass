// Stack with 2 Queues

// Implement a stack using two queues:

// You should implement the following functions:

// - push (returns the stack)

// - pop (returns the value popped)

// WE WANT TO REMOVE FROM A FIRST QUEUE AND SEND TO THE SECOND QUEUE - i.e we want someone to wait in the second line after waiting in the first line

// This function adds the value to the end of the queue. This should be an O(1) operation and return the new size of the queue.

// ============================================================================================================================================================================================

class Stack {
    constructor() {
        this.queue = new Queue();
    }
    push(val) {
        let queue = this.queue, queueTwo = new Queue();
        queueTwo.enqueue(val);
        while (queue.size) {
            queueTwo.enqueue(queue.dequeue());
        }
        this.queue = queueTwo;
        return this;
    } //O(n) time complexity

    pop() {
        return this.queue.dequeue();
    } //O(1) time complexity
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(data) {
        var node = new Node(data);

        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let queue = new Queue();
console.log(queue.enqueue(10)) // 1
console.log(queue.size) // 1
console.log(queue.enqueue(100)) // 2
console.log(queue.size) // 2
console.log(queue.enqueue(1000)) // 3
console.log(queue.size) // 3