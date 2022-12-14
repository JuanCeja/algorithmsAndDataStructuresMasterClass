// ============================ THIS IS OUR NODE ===============================

// our node just holds a piece of data. can be anything

// piece of data - val
// reference to the next node - next

class Node {
    constructor(val) {
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

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;

        let prevHead = this.head;
        this.head = prevHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return prevHead;
    }

    unShift(val) {
        let newNode = new Node(val);

        if (!this.head) {
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
        if (index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, value) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        let newNode = new Node(value);

        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unShift(value);

        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        // swap the head and tail
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        // create next and prev variables
        let next;

        // the reason we want our prev to be null and not undefined is because we want to make sure our end of the list(the tail.next) to be null
        let prev = null;

        // create a variable called current and initialize it to the head property

        // loop through the list
        // we can also use a while loop. 
        // it would go while(current){code goes heres}
        for (let i = 0; i < this.length; i++) {
            // set next to be the next property on whatever current is
            next = current.next;

            // set the next property on the current to be whatever prev is
            current.next = prev;

            // set prev to be the value of the current variable
            prev = current;

            // set the current variable to be the value of the next variable
            current = next;
        }
        // this will return our new reversed singly linked list
        return this;
    }

    // this is just a method to see if our inner nodes were reversed and node just the head and tail getting swapped
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);
console.log(list);
list.print();
list.reverse();
list.print();