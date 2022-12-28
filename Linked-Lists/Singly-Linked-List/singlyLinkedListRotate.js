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
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }

    rotate(place) {
        if (place === 0 || place >= this.length) return this;
        if (place < 0) place = this.length + place;

        let current = this.head;
        let counter = 0;
        
        while (counter < place) {
            this.push(current.val)
            this.shift(current.val)
            current = current.next
            counter++
        }
        return this;
    };

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