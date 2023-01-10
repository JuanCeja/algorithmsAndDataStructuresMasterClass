// BinaryHeap - extractMax Exercise

// Implement the following functions on the maxBinaryHeap class

// extractMax

// Implement the `extractMax` function on the `MaxBinaryHeap.prototype`: This function should remove the root node in a binary heap. Make sure to re-order the heap after removal if necessary.

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

    extractMax() {
        
    }

}

let binaryHeap = new MaxBinaryHeap()
binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)
console.log(binaryHeap()); // [5,4,2,1,3]
console.log(binaryHeap.extractMax()) // [4,3,2,1]
console.log(binaryHeap.extractMax()) // [3,1,2]
