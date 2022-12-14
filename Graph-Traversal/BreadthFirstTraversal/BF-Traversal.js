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
        if (!this.adjacencyList[vertex]) return null;

        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        };
        delete this.adjacencyList[vertex];
    };

    depthFirstRecursive(start) {
        if (!this.adjacencyList[vertex]) return null;

        let results = [];
        let visitedVertices = {};
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visitedVertices[vertex] = true;
            results.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visitedVertices[neighbor]) return dfs(neighbor);
            });
        })(start);

        return results;
    };

    depthFirstIterative(start) {
        let stack = [];
        let results = [];
        let visitedVertices = {};
        let currentVertex;

        stack.push(start);
        visitedVertices[start] = true;

        while (stack.length) {
            currentVertex = stack.pop();
            results.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visitedVertices[neighbor]) {
                    visitedVertices[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        };

        return results;
    };

    breadthFirstSearch(start) {
        // create a queue(im going to use an array) and place the starting vertex in it
        // create an array to store the nodes visited
        // create an object to store the nodes visited
        let queue = [start];
        let results = [];
        let visited = {};
        let currentVertex;

        // mark the starting vertex as visited
        visited[start] = true;

        // loop as long as there is anything in the queue
        while (queue.length) {

            // remove the first vertex from the queue and push it into the array that stores nodes visited
            currentVertex = queue.shift();
            results.push(currentVertex);

            // loop over each vertex in the adjacency list for the vertex you are visiting
            this.adjacencyList[currentVertex].forEach(neighbor => {
                // if it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        // once you have finished looping, return the array of visited nodes
        return results;
    };
}

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


console.log(g.breadthFirstSearch('A'));