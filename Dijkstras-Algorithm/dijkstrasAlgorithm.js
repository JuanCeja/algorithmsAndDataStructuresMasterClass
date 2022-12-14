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

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B', 9);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'C', 7);
console.log(graph);