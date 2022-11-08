class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.tail = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        // if there is no head, return undefined

        // store the current tail in a variable to return later

        // if the length is 1, set the head and tail to be null

        // update the tail to be the previous node

        // set the newTail's next to be null

        // decrement the length

        // return the removed value
    }
}