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
        if (!this.head) {
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
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        // if the index is less than 0 or greater or equal to the length, return null
        if (idx < 0 || idx >= this.length) return null;

        let count, current;
        // if the index is less than or equal to half the length of the list 

        if (idx <= this.length / 2) {

            // set count to 0 and current to the head so we start from the head
            count = 0;
            current = this.head;

            // loop through the list starting from the head and loop towards the middle
            while (count !== idx) {
                current = current.next;
                count++
            }
        } else {

            // OTHERWISE if the index is greater than half the length of the list
            // set count to the last element in the list and current to the tail so we start from the tail
            count = this.length - 1;
            current = this.tail;

            // loop through the list starting from the tail and loop towards the middle
            while (count !== idx) {
                current = current.prev;
                count--;
            }
        }

        // return the node once it is found
        return current;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push('get this');
list.push(5);
console.log(list.get(3));