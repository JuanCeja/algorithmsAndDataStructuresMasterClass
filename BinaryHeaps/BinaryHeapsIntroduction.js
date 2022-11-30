// ======================= WHAT IS A BINARY HEAP? ======================

// They are very similar to a binary search tree, but with some different rules!

// In a MAX-BINARY-HEAP, parent nodes are always larger than child nodes. In a MIN-BINARY-HEAP, parent nodes are always smaller than child nodes. 

// ===================== MAX BINARY HEAP =============================

//         41
//    39        33
//  18  27    12

// Each parent has at most 2 child nodes.

// The value of each parent node is ALWAYS greater than its child nodes.

// In a MAX-BINARY-HEAP the parent is greater than the children, but there are no guarantees between sibling nodes.

// A binary-heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first, meaning every left and right is filled before moving down. Left children are always filled out first.


// ===================== MIN BINARY HEAP =============================

//              1
//         2         3
//      6    9    5     10
//   14

// Each parent has at most 2 child nodes.

// The value of each parent node is ALWAYS less than its child nodes.

// In a MIN-BINARY-HEAP the parent is less than the children, but there are no guarantees between sibling nodes.

// A binary-heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first, meaning every left and right is filled before moving down. Left children are always filled out first.

=============================================== RECAP ===================================================

// Binary heaps are very useful data structures for sorting, and implementing other data structures like PRIORITY QUEUES

// Binary heaps are either MAX-BINARY-HEAPS or MIN-BINARY-HEAPS with parents either being smaller or larger than their children 

// with just a little bit of math, we can represent heaps using arrays