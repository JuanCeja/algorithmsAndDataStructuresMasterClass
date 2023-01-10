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

    sinkDown() {
        // your parent index starts at 0 (the root)

        // find the index of the left child 2 * index + 1 (make sure its not out of bounds)

        // find the index of the right child 2 * index + 2 (make sure its not out of bounds)

        // if the left or right child is greater than the element...swap. if both left and right children are larger, swap the largest child

        // the child index you swapped to now becomes the new parent index

        // keep looping and swapping until neither child is larger than the element

        // return old root
    }

    extractMax() {
        // swap the first value in the values property with the last one

        // pop from the values property, so you can return the value at the end

        // have the new root 'sink down' to the correct spot

        // return values
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
