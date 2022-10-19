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
        
    }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('There');