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

    push(val){
        let newNode = new Node(val);
        if(this.length === 0) {
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
        if(this.length === 0) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
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

    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
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

    unshift(val){
        // create a new node with the val passed

        // if the length is 0 set head and tail to be new node

        // set the prev property on the head of the list to be the new node

        // set the next property on the new node to be the head property

        // update the head to be the new node

        // increment length by 1

        // return the list
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