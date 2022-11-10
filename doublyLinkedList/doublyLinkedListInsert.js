class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let count, current;
        if (idx <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== idx) {
                current = current.next;
                count++
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(idx, val) {
        let foundNode = this.get(idx);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    };

    insert(idx, val) {
        // if the index is less than 0 or greater than the length return false
        if (idx < 0 || idx > this.length) return false;

        // if the index is 0, UNSHIFT
        else if (idx === 0) return this.unshift(val);

        // if the index is the same as the length, PUSH
        else if (idx === this.length) return this.push(val);

        else {
            let newNode = new Node(val);

            // use the GET method to access teh index - 1
            let prevNode = this.get(idx - 1);

            // set the next and prev properties on the correct nodes to link everything together
            newNode.next = prevNode.next;
            newNode.prev = prevNode;
            newNode.next.prev = newNode;
            prevNode.next = newNode;
        }
        // increment the length
        this.length++;
        // return true
        return true;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(5);
console.log('before insert', list);
console.log(list.insert(4, 4));
console.log('after insert', list);