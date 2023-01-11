// Graphs Exercise - removeVertex

// Implement the following methods on the Graph class, removeEdge has been implemented for you.

// removeVertex - this function should remove the node in the array of nodes and also remove all edges that the removed node previously contained.

// ============================================================================================================================================================================================

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(element => element !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(element => element !== vertex1);
    }
}

let graph = new Graph;

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');