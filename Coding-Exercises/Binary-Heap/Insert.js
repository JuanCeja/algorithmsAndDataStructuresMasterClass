// BinaryHeap - insert Exercise

// Implement the following functions on the maxBinaryHeap class

// insert

// Implement the `insert` function on the `MaxBinaryHeap.prototype`: This function should insert a node in a binary heap. Make sure to re-order the heap after insertion if necessary.

// ============================================================================================================================================================================================

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        // push the value into the values property on the heap

        // bubble up
            // create a variable called index which is the length of the values property - 1

            // create a variable called parentIndex which is the floor of (index - 1) / 2

            // keep looping as long as the values element at the parentIndex is less than the values element at the child index

                // swap the value of the values element at the parentIndex with the value of the element property at the child index

                // set the index to be the parentIndex, and start over
    }
}

binaryHeap = new MaxBinaryHeap()
binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)
console.log(binaryHeap.values) // [6, 4, 5, 1, 3, 2]