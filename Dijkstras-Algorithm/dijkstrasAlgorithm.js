// ========================================================================== SIMPLE WEIGHTED GRAPH ==========================================================================

// before we can actually find the shortest path in a graph between 2 points, we need to assign values between those points so we can find any path short or long. Make our graph a WEIGHTED GRAPH.

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    };
};

// =============================================================================== THE APPROACH ===============================================================================

// Every time we look to visit a new node, we pick the node with the smallest known distance to visit

// Once we've moved to the node we're going to visit, we look at each of it's neighbors

// For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node

// If the new total distance to a node is lee than the previous total, we store the shorter distance for that node

// ============================================================================ SIMPLE PRIORITY QUEUE ===========================================================================

// This priority queue will give us the next node to visit and all that it does it's just an array, and every time you add something to it, you give it a priority and then we sort based off of that priority, which is what happens everytime we insert.

class PriorityQueue {
    constructor() {
        this.values = [];
    };

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };

    dequeue() {
        return this.values.shift();
    };

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}

let q = new PriorityQueue;
q.enqueue('B', 3);
q.enqueue('C', 5);
q.enqueue('D', 2);
q.enqueue('Q', 20);
q.enqueue('p', 1);
console.log(q.values);
console.log(q.dequeue());


// let graph = new WeightedGraph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addEdge('A', 'B', 9);
// graph.addEdge('A', 'C', 5);
// graph.addEdge('B', 'C', 7);
// console.log(graph);