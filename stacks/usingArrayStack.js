// the easiest way you make a stack is using array implementation
// a stack is a LIFO method. Last In First Out

// here we will use POP and PUSH
let stack = [];
stack.push('youtube.com');
stack.push('instagram.com');
stack.push('nfl.com');
stack.pop();
stack.pop();
stack.pop();
// we are entering our data at the end and its the first to be removed using PUSH and POP. nfl.com went in last and came out first


// ========================== we can also use UNSHIFT and SHIFT method using the array ================================
// but we cant to stick to using POP and PUSH if were using an array in order to optimize and have better time complexity. when we use SHIFT and UNSHIFT
// we have to re-index everything in our array.   

let stack2 = [];
stack.unshift('youtube.com');
stack.unshift('instagram.com');
stack.unshift('nfl.com');
stack.shift();
stack.shift();
stack.shift();
// we are entering our data at the beginning and nfl.com becomes the last to enter and the first to be removed. But using UNSHIFT and SHIFT we have a higher time complexity.

// ======================= our most efficient way to use a stack would be using a SINGLY LINKED LIST ======================================
// because we only need to worry about entering and removing either from the beginning or the end. we really just care about using the LIFO method. 
