// ======================================================== WHAT ARE GRAPHS ==========================================================

// A Graph is a set of nodes together with a set of pairs of these vertices, which are the connections. So we have a bunch of nodes, and then connections between them. 

// A Graph is a type of tree, but in a Graph there is no parent node, there is no starting place, there is no entry point. There just a bunch of nodes treated equally with connections between them.

// Heres a good link for Graph Theory: https://www.youtube.com/playlist?list=PLpXOY-RxVRTPPVLBP6-sz6CMWxhtrI-v_



// ====================================================== ESSENTIAL GRAPH TERMS ======================================================

// VERTEX - it's just a node
// EDGE - the connection between the nodes
// WEIGHTED/UNWEIGHTED - values assigned to distances between vertices
// DIRECTED/UNDIRECTED - directions assigned to distanced and between vertices



// ======================================================== USES FOR GRAPHS ==========================================================

// Social Networks, Location/Mapping, Routing Algorithms, Visual Hierarchy, File System Optimization, they are EVERYWHERE!



// ========================================================= TYPES OF GRAPHS =========================================================

// UNDIRECTED GRAPH   -   There is no direction to or polarity to the edges. They are 2 way connections.
// DIRECTED GRAPH     -   Is often represented with arrows, which indicates the direction, the polarity of that edge. 
// UNWEIGHTED GRAPH   -   Each connection(edge) between the vertices(nodes) has no value associated with it.
// WEIGHTED GRAPH     -   Each connection(edge) between the vertices(nodes) has a value associated with it. When we assign a value to 
//                        the edges, it becomes a weighted graph. There is information about the connection itself.



// ======================================================= WAYS TO STORE GRAPHS =======================================================

// ADJACENCY MATRIX    -    A matrix is just a 2 dimensional structure(looks like rows and columns), usually implemented with nested arrays, but not always. 
//                          Basically we store information in rows and columns so we could represent the connections were using.

// ADJACENCY LIST      -    In a Adjacency List we use an array or list to store the edges. So if we wanted to figure out what edges, 
//                          what connections there were between node3 and it's other nodes, we would go to the index of node3 in our 
//                          array and in that index theres a list(array) there that contains the connections. Also, if our nodes are not 
//                          numeric and let's say they are strings. Well, we could use a hash table, use a key-value pair of data 
//                          structure. We store a given key and attach a list(array) as a value with the connections stored in the 
//                          array. 



// ==================================================== ADJACENCY MATRIX VS LIST BIG O ====================================================

//                         ===== ADJACENCY LIST =====                                        ===== ADJACENCY MATRIX ===== 
                // GOOD - * Can take up less space (in sparse graphs)                 GOOD - * Faster to look up specific edge
                        // * Faster to iterate all edges                                      


                // BAD -  * Can be slower to lookup specific edge                      BAD -  * Takes up more space(in sparse graphs)
                //                                                                             * Slower to iterate all edges





//                          A
//                      /       \
//                     B         C
//                      \       /
//                       D --- E
//                        \   /
//                          F