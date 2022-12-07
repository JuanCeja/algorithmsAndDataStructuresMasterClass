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

    removeEdge(vertex1, vertex2) {
        // the function should reassign the key of vertex1 to be an array that does not contain vertex2
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter (v => v !== vertex2);
        
        // the function should reassign the key of vertex2 to be an array that does not contain vertex1
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter (v => v !== vertex1);
        
    };
};

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
console.log(g);
g.removeEdge('Tokyo', 'Dallas');
g.removeEdge('Dallas', 'Aspen');
console.log(g);