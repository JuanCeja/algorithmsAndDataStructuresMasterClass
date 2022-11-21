// There are 2 ways of traversing a tree and they are: 
    // Breadth-first Search
    // Depth-first Search

// BFS just means we want to visit every node on the same level, every sibling node before we look at a child.

//        10
//    6        15
//  3   8          20

//        ---> 10
//    ---> 6 --->  15  --->
//  ---> 3   8 --->  20  ---->

// In BFS this would look like [10, 6, 15, 3, 8, 20]

// ================== BFS (Iteratively) ========================

// create a queue (this can be an array) and a variable to store the values of nodes visited

// place the root node in the queue

// loop as long as there is anything in the queue

    // dequeue a node from the queue and push the value of the node into the variable that stores the nodes

    // if there is a left property on the node dequeued - add it to the queue

    // if there is a right property on the node dequeued - add it to the queue

// return the variable that stores the values