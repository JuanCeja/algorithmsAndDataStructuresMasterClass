// ========================================================================== SIMPLE WEIGHTED GRAPH ==========================================================================

// we create our weighted graph before we can actually start Dijkstra's Algorithm

// before we can actually find the shortest path in a graph between 2 points, we need to assign values between those points so we can find any path short or long. so we make our graph a WEIGHTED GRAPH. 

// =============================================================================== THE APPROACH ===============================================================================

// Every time we look to visit a new node, we pick the node with the smallest known distance to visit from our current position(node)

// Once we've moved to the node we're going to visit, we look at each of it's neighbors

// For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node

// If the new total distance to a node is less than the previous total, we store the shorter distance for that node

// =============================================================================== PRIORITY QUEUE  ==============================================================================

// ALL our priority queue is going to do is give us the next node to visit. Its just an array, and every time you add something to it, you give it a priority and then we sort based off of that priority, which is what happens here. So every time we INSERT, we resort and then we remove from the array. Because we use the SORT function here. This function has a TIME COMPLEXITY of O(N * log(N)).

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

// =============================================================================== PRIORITY QUEUE  ==============================================================================

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    };

    addEdge(vertex1, vertex2, weight) {
        if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push({ node: vertex2, weight });
        if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push({ node: vertex1, weight });
    };

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;

        // this is what we will return at the end
        let path = []; 

        // build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            };
            previous[vertex] = null;
        };

        // as long as there is something to visit
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === finish) {
                // we are done so we build our path to return
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                };
                break;
            };
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let neighborNode = this.adjacencyList[smallest][neighbor];

                    // calculate new distance to neighbor nodes
                    let candidate = distances[smallest] + neighborNode.weight;
                    let nextNeighbor = neighborNode.node;

                    if(candidate < distances[nextNeighbor]) {
                        // this is updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;

                        // this is updating previous - how we got to neighbor
                        previous[nextNeighbor] = smallest;

                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    };
                };
            };
        };
        return path.concat(smallest).reverse();
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

console.log(graph.Dijkstra('A', 'E'));
console.log(graph.Dijkstra('A', 'F'));