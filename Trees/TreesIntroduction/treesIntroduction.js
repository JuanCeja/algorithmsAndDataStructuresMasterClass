// ======================= WHAT IS A TREE ? ========================

// A data structure that consists of nodes in a parent/child relationship. 

// ======================= TREE TERMINOLOGY ========================

// ROOT - The top node in a tree
// CHILD - A node directly connected to another node when moving away from the root
// PARENT - The converse notion of a child
// SIBLINGS - A group of nodes with the same parent
// LEAF - A node with no children
// EDGE - The connection between one node and another

// ===================== USES FOR TREES ============================

// HTML DOM
// Network Routing
// Abstract Syntax Tree
// Artificial Intelligence
// Folders in Operating Systems
// Computer File Systems

// ===================== KINDS FOR TREES ===========================
// === that im focusing on in general ====

// Trees
// Binary Trees (Each Node can have at MOST 2 children)
// Binary Search Trees

// =============== HOW BINARY SEARCH TREES WORK ====================

// Each parent has at most 2 children
// Every node to the left of a parent node is ALWAYS LESS than the parent
// Every node the right of a parent node is ALWAYS GREATER than the parent

// ===================== WHEN TO USE BFS OR DFS ========================

// Time complexity for DFS and BFS is the same, we visit every node once. Space complexity is where it changes. 

// For space complexity it really depends on the structure of the tree.If it's a really wide tree BFS could store or take up a lot more space for that queue so use DFS. If it's a really deep long tree than DFS could end up taking up more space so use BFS. 

// =========== WHEN TO KNOW WHICH VARIANCE OF DFS TO USE =============

// DFS-IN-ORDER: When we use In-Order on a Binary Search Tree, if we look at the data we get back, it will be in order. We get all the nodes in the tree in their underlying order. So it goes from lowest to highest. For example: [1, 2, 4, 6, 25, 47, 91, 100].

// DFS-PRE-ORDER: Can be used to 'export' a tree structure so that it is easily reconstructed or copied and this could be useful if you're trying to clone or duplicate a tree or you want to store it. The values could be stored in an array that can be used to restore the same tree.

// ========================== RECAP ====================================

// Trees are non-linear data structures that contain a root and child nodes

// Binary Search Trees can have values of any type, but at most two children for each parent

// Binary Search Trees are a more specific version of binary trees where every node the left of a parent is less than its value and every node to the right is greater

// We can search or traverse trees using BFS and DFS