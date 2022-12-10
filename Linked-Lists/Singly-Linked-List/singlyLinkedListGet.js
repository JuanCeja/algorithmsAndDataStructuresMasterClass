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
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);

        if(!this.head) {
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
        return prevHead;
    }

    unShift(val){
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {

        // if the index is less than zero or greater than or equal to the length of the list, return null
        if(index < 0 || index >= this.length) return null;

        // our counter variable and our current variable so we can use to loop 
        let counter = 0;
        let current = this.head;
        
        // loop through the list until you reach the index and return the node at the specific index
        while(counter !== index){
            current = current.next;
            counter++;
        }
        // we return the node at our index position
        return current;
    }
}

let list = new SinglyLinkedList();
list.push(':)');
list.push('Hello');
list.push('Goodbye');
list.push('!');
list.push('<3');
list.push(':)');

console.log('get this',list.get(3));
console.log(list);