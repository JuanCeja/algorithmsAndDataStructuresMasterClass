// SLL - remove Exercise


// This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

// Examples

// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20);
// singlyLinkedList.remove(2).val; // 15
// singlyLinkedList.remove(100); // undefined

// ================================================================================================================================================================================

class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.val = val
        this.next = null;
    }
    push() {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    remove() {
        
    }
}

let singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20);
console.log(singlyLinkedList.remove(2).val); // 15
console.log(singlyLinkedList.remove(100)); // undefined
