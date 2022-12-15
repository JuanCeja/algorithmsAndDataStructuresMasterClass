
// =============================================================================== THE APPROACH ===============================================================================

// Every time we look to visit a new node, we pick the node with the smallest known distance to visit

// Once we've moved to the node we're going to visit, we look at each of it's neighbors

// For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node

// If the new total distance to a node is lee than the previous total, we store the shorter distance for that node

// ============================================================================ SIMPLE PRIORITY QUEUE ===========================================================================

// This priority queue will give us the next node to visit and all that it does it's just an array, and every time you add something to it, you give it a priority and then we sort based off of that priority, which is what happens everytime we insert.

class PriorityQueue {
    constructor() {
        this.values = [];
    };

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    };

    dequeue() {
        return this.values.shift();
    };

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
};

// ========================================================================== SIMPLE WEIGHTED GRAPH ==========================================================================

// before we can actually find the shortest path in a graph between 2 points, we need to assign values between those points so we can find any path short or long. Make our graph a WEIGHTED GRAPH.

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    };

    // this function should accept a starting and ending vertex
    dijkstrasAlgorithm(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;

                                    // ===== BUILD UP INITIAL STATE =====

        // create an object(well call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
        // after setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because thats were we begin
        // create another object called previous and set each key to be every vertex in the adjacency list with a value of null
        for (let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }
            else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        };

        // start looping as long as there is anything in the priority queue
        while(nodes.values.length) {

            // dequeue a vertex from the priority queue
            smallest = nodes.dequeue().val;
            
            // if that vertex is the same as the ending vertex - we are !!!DONE!!!
            if(smallest === finish) {

            };

            // ====== ELSE BUILD UP PATH TO RETURN AT THE END =====
            
            
            if(smallest || distances[smallest] !== Infinity) {
                for( let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                };
            };
        };

        // calculate the distance to that vertex from the starting vertex

        // if the distance is less than what is currently stored in our distances object

        // update the distances object with next lower distance

        // update the previous object to contain that vertex

        // enqueue the vertex with the total distance from the start node

    };
};

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

graph.dijkstrasAlgorithm('A', 'E');