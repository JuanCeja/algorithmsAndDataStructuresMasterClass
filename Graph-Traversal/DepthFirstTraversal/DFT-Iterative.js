class Graph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(v1, v2) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
        if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
    };

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    };

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        };
        delete this.adjacencyList[vertex];
    };

    depthFirstRecursive(start) {
        if(!this.adjacencyList[start]) return null;

        const results = [];
        const visitedVertices = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) return null;
            visitedVertices[vertex] = true;
            results.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visitedVertices[neighbor]) return dfs(neighbor);
            });
        })(start);

        return results;
    };

    depthFirstIterative(start) {

    };
};

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

//                          A
//                      /       \
//                     B         C
//                      \       /
//                       D --- E
//                        \   /
//                          F


console.log(g.depthFirstRecursive('A'));