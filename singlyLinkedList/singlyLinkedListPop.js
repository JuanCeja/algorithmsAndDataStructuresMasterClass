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

        // loop through the list until you reach the tail

        // set the next property of the 2nd to the last node to be bull 

        // set the tail to be the 2nd to the last node

        // decrement length by 1

        // return the value of the node removed
    }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('There');
list.push('Juan');
list.push('Delete this!');
list.pop();

console.log(list);