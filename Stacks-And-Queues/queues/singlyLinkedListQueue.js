// we want to start of by creating our Stack class and Node class
// in a STACK we add to the BEGINNING and remove from the BEGINNING
// in a QUEUE we add to the END and remove from the BEGINNING

// a QUEUE is a FIFO method. First In First Out

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        // create a new node using the val passed into the function
        let newNode = new Node(val);

        // if there are no nodes in the queue, set this node to be the first and last property of the queue
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {

            // otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        // if there is no first property, return null
        if (!this.first) return null;

        // store the first property in a variable
        let temp = this.first;

        // see if the first is the same as the last(check if there is only 1 node). If so, set the first and last to be null
        if (this.first === this.last) {
            this.last = null;
        }

        // otherwise, if there is more than 1 node, set the first property to be the next property of the first
        this.first = this.first.next;

        // decrement the size
        this.size--;

        // return the val of the node dequeued
        return temp.val;
    }
}

let queue = new Queue();
console.log('first', queue.enqueue('First'));
console.log('second', queue.enqueue('Second'));
console.log('third', queue.enqueue('Third'));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);