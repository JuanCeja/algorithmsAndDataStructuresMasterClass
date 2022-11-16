// we want to start of by creating our Stack class and Node class
// in a STACK we add to the BEGINNING and remove from the BEGINNING
// in a QUEUE we add to the END and remove from the BEGINNING

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}