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
        let newNode = new Node(val);
        if (this.length === 0) {
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

    pop() {
        if (this.length === 0) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        // create a new node with the val passed
        let newNode = new Node(val);

        // if the length is 0 set head and tail to be new node
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // set the prev property on the head of the list to be the new node
            this.head.prev = newNode;

            // set the next property on the new node to be the head property
            newNode.next = this.head;

            // update the head to be the new node
            this.head = newNode;
        }

        // increment length by 1
        this.length++;

        // return the list
        return this;
    }
}

let list = new DoublyLinkedList();
list.unshift(1);
list.unshift(2);
list.unshift(3);
console.log('before shift === ', list);
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log('after shift === ', list);