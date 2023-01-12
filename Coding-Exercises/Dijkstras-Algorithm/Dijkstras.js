// Graphs - Dijkstra Exercise

// Create a constructor function for a WeightedGraph. It should inherit from the Graph constructor and have all the same methods except for adding an edge. Since weights will now be added with edges, the adjacency list should not only store the nodes which are connected to it but also the corresponding weight of the edge.

// A PriorityQueue has been implemented for you. The PriorityQueue adds the LOWEST priority first (this is helpful for Dijkstra).

// Implement the following method on the WeightedGraph.prototype

// Dijkstra - this function should return an array with two values, the first being the total distance and the second an array of nodes which create the shortest path.

// ============================================================================================================================================================================================

/*** 
  *** Use Graph as a constructor for WeightedGraph to inherit from! 
  ***
***/

function WeightedGraph() {
    Graph.call(this);
}

// Linking WeightedGraph class to Graph class via prototype linkage 
WeightedGraph.prototype = Object.create(Graph.prototype);

//Override the Graph addEdge method so we can add a weight to the node
WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
};

WeightedGraph.prototype.Dijkstra = function (start, finish) {
    var previous = {};
    var distances = {};
    var path = [];
    var smallest;
    var nodes = new PriorityQueue();

    // Building initial state
    for (let vertex in this.adjacencyList) {
        if (vertex === start) {
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
        }
        else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }

    // As long as there is something to visit
    while (nodes.values.length) {
        smallest = nodes.dequeue().val;
        if (smallest === finish) {
            while (previous[smallest]) {
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
        }
        else {
            for (let neighbor in this.adjacencyList[smallest]) {
                // find neighboring node
                let nextNode = this.adjacencyList[smallest][neighbor];
                // calculate new distance to neighboring node 
                let candidate = distances[smallest] + nextNode.weight;
                let nextNeighbor = nextNode.node;
                if (candidate < distances[nextNeighbor]) {
                    // updating new smallest distance to neighbor
                    distances[nextNeighbor] = candidate;
                    // updating previous - How we got to neighbor
                    previous[nextNeighbor] = smallest;
                    // enqueue in priority queue with new priority
                    nodes.enqueue(nextNeighbor, candidate);
                }
            }
        }
    }
    return path.concat(smallest).reverse();
}

function Graph() {
    this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
    let total = 0;

    Object.values(this.adjacencyList).forEach(list => {
        total += list.length;
    });

    // note that we've double-counted up til now since we've looked at
    // the adjacencyList for every node.
    return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
    this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function (vertex) {
    while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
    );
};

/*** 
   *** Use the following as a PriorityQueue (it's a min heap)! 
   ***
***/
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

let g = new WeightedGraph()

g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');
g.addEdge('A', 'Z', 7)
g.addEdge('A', 'C', 8)
g.addEdge('Z', 'Q', 2)
g.addEdge('C', 'G', 4)
g.addEdge('D', 'Q', 8)
g.addEdge('E', 'H', 1)
g.addEdge('H', 'Q', 3)
g.addEdge('Q', 'C', 6)
g.addEdge('G', 'Q', 9)

console.log(g.Dijkstra('A', 'E')) // ["A", "Z", "Q", "H", "E"]
console.log(g.Dijkstra('A', 'Q')) // ["A", "Z", "Q"]
console.log(g.Dijkstra('A', 'G')) // ["A", "C", "G"]
console.log(g.Dijkstra('A', 'D')) // ["A", "Z", "Q", "D"]