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

    }
}