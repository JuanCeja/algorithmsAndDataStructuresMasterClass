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

