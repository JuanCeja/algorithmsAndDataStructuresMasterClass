// the easiest way you make a queue is using array implementation
// a queue is a FIFO method. First In First Out

// here we will use PUSH and SHIFT
let queue = [];
queue.push('first');
queue.push('second');
queue.push('third');
console.log('------- here we use PUSH then SHIFT ---------')
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
// we are entering our data at the end and its the last to be removed using PUSH and SHIFT. third went in last and came out last


// ========================== we can also use UNSHIFT and POP method using the array ================================

let queue2 = [];
queue.unshift('first');
queue.unshift('second');
queue.unshift('third');
console.log('------- here we use UNSHIFT then POP ---------')
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
// we are entering our data at the beginning and removing it from the end. so third enters last and gets removed last. first enters first and gets removed first

// ======================= our most efficient way to use a queue would be using a Singly Linked List Based Queue ======================================
// ======================= WHEN USING A QUEUE WE HAVE TO RE INDEX EVERYTHING EVERY TIME, THERE IS NO WAY AROUND IT SO WE ARE BETTER OFF MAKING A QUEUE CLASS =================
