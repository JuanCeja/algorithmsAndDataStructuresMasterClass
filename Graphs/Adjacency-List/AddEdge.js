class Graph {
    constructor() {
        this.adjacencyList = {}
    };

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    };

    addEdge (v1, v2) {
        // the function should find in the adjacency list the key of vertex1 and push vertex2 to the array
        if(this.adjacencyList[v1]) {
            this.adjacencyList[v1].push(v2);
        }
        
        // the function should find in the adjacency list the key of vertex2 and push vertex1 to the array
        if(this.adjacencyList[v2]) {
            this.adjacencyList[v2].push(v1);
        }
    };
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
console.log(g);