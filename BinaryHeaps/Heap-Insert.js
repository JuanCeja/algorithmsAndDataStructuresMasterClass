// Defining our class
class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(val) {
        // add the value to our array
        this.values.push(val);

        // call our helper function
        this.bubbleUp();

        // return our value
        return this.values;
    }

    bubbleUp() {
        // set a variable that will get the index of the value we just pushed in and set that value in a const element variable
        let idx = this.values.length - 1;
        const element = this.values[idx];

        // here we bubble up. we keep looping until we find its spot
        while(idx > 0) {

            // set a variable that grabs the index of the parent of the value we just added
            let parentIdx = Math.floor((idx - 1) / 2);

            // we set a variable that grabs the value of the parent 
            let parent = this.values[parentIdx];
            
            // we break if once the value has found its place or it can no longer be moved. we also break so we dont get into an infinite loop
            if(element <= parent) break;

            // we swap our values
            this.values[parentIdx] = element;
            this.values[idx] = parent;

            // me move up our index and re run the code again
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
console.log(heap.insert(199));