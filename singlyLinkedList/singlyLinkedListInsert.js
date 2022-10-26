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
        
        if(!this.head) {
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
        if(!this.head) return undefined;

        let prevHead = this.head;
        this.head = prevHead.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return prevHead;
    }

    unShift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, value){
        // set a variable that holds our return value from our get method.
        // should return a node or null
        let foundNode = this.get(index);

        // if our value is true reassign our value and return true otherwise return false
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
        }

        insert(index, value){

            // this is our new node we will be inserting
            let newNode = new Node(value);

            // if the index is less than zero or greater than the length, return false
            if(index < 0 || index > this.length) return false;
            

            // if the index is the same as the length, PUSH a new node to the end of the list
            if (index === this.length) return !!this.push(value)
            
            // if the index is 0, UNSHIFT a new node to the start of the list
            if(index === 0) return !!this.unShift(value)
            
            // otherwise , using the GET method, access the node at the index - 1
            let prev = this.get(index - 1);
            let temp = prev.next;

            // set the next property on that node to be the new node
            prev.next = newNode;

            // set the next property on the new node to be the previous next 
            newNode.next = temp;
                
            // increment the length
            this.length++

            // return true
            return true;
        }
}

let list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);

console.log(list.insert(0, 'FIRST'));
console.log(list.insert(4, 'LAST'));
console.log(list.insert(55, 'LAST'));
console.log(list.insert(-4, 'LAST'));
