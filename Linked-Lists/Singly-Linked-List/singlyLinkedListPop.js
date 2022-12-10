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

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    pop(){
        // if there are no nodes in the list, return undefined
        if(!this.head) return undefined;

        // variables to keep track of our location/also so we can use them to loop through our list
        let current = this.head;
        let newTail = current;

        // loop through the list until you reach the tail
        while(current.next) {
            newTail = current;
            current = current.next;
        }

        // set the tail to be the 2nd to the last node
        this.tail = newTail;

        // set the next property of the 2nd to the last node to be bull 
        this.tail.next = null;

        // decrement length by 1
        this.length--;

        // this is a base case incase the list only has 1 item
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        
        // return the value of the node removed 
        return current;
    }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('There');
list.push('Juan');
list.push('Delete this!');

console.log('before pop', list);

console.log('===============================================')
console.log('this is the deleted node', list.pop());
console.log('===============================================')

console.log('after pop', list);