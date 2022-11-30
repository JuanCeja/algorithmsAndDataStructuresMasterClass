class MaxBinaryHeap {
    constructor() {
        this.values = [];
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
        // save the first value and pop the last value
        const max = this.values[0];
        const end = this.values.pop();

        // if the length is greater than 0, swap the values, if the length is 0 we will just be re-inserting the same value we just popped. Then, we call our SinkDown() function
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        // store our parent index in a variable(this is what well be sinkingDown)
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        // we run a loop until we meet a condition to break out
        while (true) {

            // find our left and right children and store them in a variable
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;

            // we will set this variables if they are valid
            let leftChild, rightChild;

            // our swap variable to know where to swap to
            let swap = null;

            // this 'if' checks to see if we have a valid leftChild and is not out of bounds
            if (leftChildIdx < length) {

                // if we have a valid child, we set our leftChild to that value
                leftChild = this.values[leftChildIdx];
                
                // if the leftChild is greater than our element value we set swap to that leftChildIdx
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            
            // this 'if' checks to see if we have a valid rightChild and is not out of bounds
            if (rightChildIdx < length) {

                // if we have a valid child, we set our rightChild to that value
                rightChild = this.values[rightChildIdx];

                // here we check for 2 things. if leftChild < element we swap it with the right. BUT if leftChild and rightChild are both greater than the element we check to see which one was greater of the 2. if rightChild > leftChild than we set swap to the rightChildIdx otherwise leave it at leftChildIdx
                if (
                    swap === null && rightChild > element ||
                    swap !== null && rightChild > leftChild
                ) {
                    swap = rightChildIdx;
                }
            }

            // if no swaps were made we break. the parent is greater than both its children
            if (swap === null) break;

            // we swap our element with our swap index
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            // our idx becomes the swap position so we can re run this code and look for new children to compare to with our next idx.
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap.insert(55));
console.log(heap.extractMax());
console.log(heap.values);