// BinaryHeap - insert Exercise

// Implement the following functions on the maxBinaryHeap class

// insert

// Implement the `insert` function on the `MaxBinaryHeap.prototype`: This function should insert a node in a binary heap. Make sure to re-order the heap after insertion if necessary.

// ============================================================================================================================================================================================

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }
}

let binaryHeap = new MaxBinaryHeap()
binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
console.log(binaryHeap.insert(6)) // [6, 4, 5, 1, 3, 2]
