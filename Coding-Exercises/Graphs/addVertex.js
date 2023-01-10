// Graphs Exercise - addVertex

// Implement the following methods on the Graph class

// addVertex- this function should add a node to the graph and place a new key in the adjacency list with the value of an empty array.

// ============================================================================================================================================================================================

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}

let graph = new Graph;

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
console.log(graph.adjacencyList['A']); // []
console.log(graph.adjacencyList['B']); // []
console.log(graph.adjacencyList['C']); // []