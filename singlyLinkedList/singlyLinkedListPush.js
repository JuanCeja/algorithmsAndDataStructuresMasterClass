// ============================ THIS IS OUR NODE ===============================

// our node just holds a piece of data. can be anything

// piece of data - val
// reference to the next node - next

class Node{
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

    // this is our push method
    push(val){

        // create a new node using the value passed to the function

        // if there is no head property on the list, set the head and tail to be the new node created
        // otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node

        // increment the length by one

    }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('There');

console.log(list);