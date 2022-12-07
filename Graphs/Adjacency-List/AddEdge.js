class Graph {
    constructor() {
        this.adjacencyList = {}
    };

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    };

    addEdge (vertix1, vertix2) {
        // the function should find in the adjacency list the key of vertex1 and push vertex2 to the array

        // the function should find in the adjacency list the key of vertex2 and push vertex1 to the array
        
    };
}