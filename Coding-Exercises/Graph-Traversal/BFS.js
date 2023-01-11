// Graphs - BFS Exercise

// Implement the following methods on the Graph class:

// breadthFirstSearch - this function should return an array of vertices visited using BFS.

// ============================================================================================================================================================================================

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if (this.adjacencyList[v1]) this.adjacencyList[v1].push(v2);
        if (this.adjacencyList[v2]) this.adjacencyList[v2].push(v1);
    };

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    };

    depthFirstSearch(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    breadthFirstSearch(start) {
        
    }
}

let graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');
graph.addEdge('S', 'P');
graph.addEdge('S', 'U');
graph.addEdge('P', 'X');
graph.addEdge('U', 'X');
graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');
graph.addEdge('X', 'Q');
graph.addEdge('X', 'Y');
graph.addEdge('X', 'V');
graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');
graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');
graph.addEdge('R', 'T');
graph.addEdge('W', 'T');

console.log(graph.depthFirstSearch('S'));

/**
 * results:
 *
 * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
 * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
 *
 **/