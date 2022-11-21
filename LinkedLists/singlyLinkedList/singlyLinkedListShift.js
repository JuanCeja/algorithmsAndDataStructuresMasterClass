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
        // if there are no nodes, return undefined
        if(!this.head) return undefined;

        // store the current head property in a variable
        let prevHead = this.head;

        // set the head property to be the current head's next property
        this.head = prevHead.next;

        // decrement the length by 1
        this.length--;

        // in the case if theres no remaining nodes
        if(this.length === 0){
            this.tail === null;
        }

        // return the value of the node removed
        return prevHead;
    }
}

// let list = new SinglyLinkedList();
// list.push('Shift this!');
// list.push('Hello');
// list.push('There');
// list.push('Juan');
// list.push('Pop this!');

// console.log('before shift', list);

// console.log('===============================================')
// console.log('shift this node', list.shift())
// console.log('pop this node', list.pop())
// console.log('===============================================')

// console.log('after shift', list);   

let list = new SinglyLinkedList();
list.push('Hello');
list.push('there');

console.log('before unshift', list);


// list.unshift('Unshifted to the beginning')

console.log('===============================================')
console.log('===============================================')

console.log('after unshift', list);   