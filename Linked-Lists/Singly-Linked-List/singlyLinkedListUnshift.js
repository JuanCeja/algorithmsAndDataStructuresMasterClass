// ============================ THIS IS OUR NODE ===============================

// our node just holds a piece of data. can be anything

// piece of data - val
// reference to the next node - next

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// ============================ THIS IS OUR SINGLY LINKED LIST ===============================

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;

        let prevHead = this.head;

        this.head = prevHead.next;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return prevHead
    }

    unshift(val){
        // create a new node using the value passed to the function 
        let newNode = new Node(val);

        // if there is no head property on the list, set the head and tail to be the newly created node
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {

            // we had this else statement because if we dont / this.head.next will keep on pointing back to its head

            // set the head property on the list to be that newly created node
            newNode.next = this.head;
            this.head = newNode;
        }

        // increment the length by 1
        this.length++;

        // return the linked list
        return this;
    }
}

let list = new SinglyLinkedList();

list.push('Hello');
list.push('there');
list.push('Juan');

console.log('before unshift', list);
list.unshift('Unshifted to the beginning')

console.log('===============================================')
console.log('===============================================')

console.log('after unshift', list);
