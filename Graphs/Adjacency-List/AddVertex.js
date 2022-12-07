class Graph {
    constructor() {
        // all we need is a single property called adjacencyList or something similar to store the actual edges, the connections between our vertices. 
        this.adjacencyList = {}
    };

    addVertex(val) {
        // it should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
        this.adjacencyList[val] = [];
    };
};

