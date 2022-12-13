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
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.adjacencyList[vertex];
    };

    // the function receives a starting node
    depthFirstRecursive(start) {
        // return early if the vertex is empty
        if (!this.adjacencyList[start]) return null;

        // create a list to store the end result, to be returned at the very end
        // create an object to store visited vertices
        const resultsArray = [];
        const visitedVertices = {};
        const adjacencyList = this.adjacencyList;

        // create a helper function which accepts a vertex
        (function dfs (vertex) {
            if(!vertex) return null;

            // the helper function should place the vertex it accepts into the visited object and push that vertex into the result array
            visitedVertices[vertex] = true;
            resultsArray.push(vertex);

            // loop over all of the values in the adjacencyList for that vertex
            adjacencyList[vertex].forEach(neighbor => {
                if(!visitedVertices[neighbor]) return dfs(neighbor);
            });

        })(start);
        // invoke the helper function with the starting vertex 

        // return the result array
        return resultsArray;
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