class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        // swap the first value in the values property with the last one

        // pop from the values property, so you can return the value at the end

        // have the new root "sink down" to the correct spot

            // your parent index start at 0(the root)

            // find the index of the left child: 2 * idx + 1 (make sure its not out of bounds)

            // find the index of the right child: 2 * idx + 2 (make sure its not out of bounds)

            // if the left or the right child is greater than the element... swap. If both left and right children are larger, swap with the largest child

            // the child index you swapped to now becomes the new parent index

            // keep looking and swapping until neither child is larger than the element

            // return the old root
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
console.log(heap.insert(199));