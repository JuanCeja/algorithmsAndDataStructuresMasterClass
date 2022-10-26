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
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return prevHead;
    }

    unShift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, value){
        let foundNode = this.get(index);

        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
        }

    insert(index, value){
        let newNode = new Node(value);

        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(value);
        if(index === 0) return !!this.unShift(value);
            
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    remove(index){
        // if the index is less than zero or greater than the length, return undefined

        // in the index is the same as the length - 1, we POP

        // if the index is 0, SHIFT

        // otherwise, using the GET method, access the node at the index - 1

        // set the next property on that node to be the next of the next node

        // decrement the length

        // return the value if the node removed
    }
}