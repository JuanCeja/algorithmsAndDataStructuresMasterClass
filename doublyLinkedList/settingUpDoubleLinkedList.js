// we always first create our node class
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// now we create our doubly linked list
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}