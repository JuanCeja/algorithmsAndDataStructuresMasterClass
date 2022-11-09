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
            poppedNode.next = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        // if length is 0 return undefined
        if (this.length === 0) return undefined;

        // store the current head property in a variable
        let oldHead = this.head;

        // if length is 1 set head and tail to be null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            
            // update the head to be the next of the old head
            this.head = oldHead.next;

            // set the heads prev property to null
            this.head.prev = null;

            // set the old heads next and prev to null to eliminate all ties
            oldHead.next = null;
            oldHead.prev = null;
        }

        // decrement the length by 1
        this.length--;

        // return the old head
        return oldHead;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log('before shift === ', list);
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log('after shift === ', list);