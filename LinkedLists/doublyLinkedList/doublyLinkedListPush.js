class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // create a new node with the value passed to the function
        let newNode = new Node(val);

        // if the head property is null set the head and tail to be the newly created node
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if not, set the next property on the tail to be that newly created node
            this.tail.next = newNode;

            // set the previous property on the newly created node to be the tail
            newNode.prev = this.tail;

            // set the tail to be the newly created node
            this.tail = newNode;

        }

        // increment the length
        this.length++

        // return the doubly linked list
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(99);
list.push(100);
console.log(list.push('LAST ITEM'));