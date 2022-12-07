class Graph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(v1, v2) {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1].push(v2);
        }
        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2].push(v1);
        }
    };

    removeEdge(v1, v2) {
        // the function should reassign the key of vertex1 to be an array that does not contain vertex2

        // the function should reassign the key of vertex2 to be an array that does not contain vertex1
    }
}