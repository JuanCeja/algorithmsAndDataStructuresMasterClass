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
        if(this.head === null) return undefined;

        // store the current tail in a variable to return later
        let poppedNode = this.tail;

        // if the length is 1, set the head and tail to be null
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update the tail to be the previous node
            this.tail = poppedNode.prev;

            // set the newTail's next to be null
            this.tail.next = null;

            // remove all ties of our poppedNode
            poppedNode.next = null;
            poppedNode.prev = null;
        }

        // decrement the length
        this.length--;

        // return the removed value
        return poppedNode;
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