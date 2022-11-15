// we want to start of by creating our Stack class and Node class

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}