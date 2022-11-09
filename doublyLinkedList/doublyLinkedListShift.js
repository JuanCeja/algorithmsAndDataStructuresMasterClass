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

    shift(){
        // if length is 0 return undefined

        // store the current head property in a variable

        // if length his 1 set head and tail to be null

        // update the head to be the next of the old head

        // set the heads prev property to null

        // set the old heads next to null

        // decrement the length by 1

        // return the old head
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log('before pop === ', list);
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log('after pop === ', list);