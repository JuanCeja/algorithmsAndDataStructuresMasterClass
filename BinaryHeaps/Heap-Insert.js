// Defining our class
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        // push the value into the values property on the heap
        this.values.push(val);

        // Bubble up:
        // create a variable called index which is the length of the values property -1
        let index = this.values.length - 1;

        // create a variable called parentIndex which is the floor of (index - 1) / 2
        let parentIndex = Math.floor((index - 1) / 2);

        // keep looping as long as the values element at the parentIndex is less than the values element at the child index
        while(this.values[parentIndex] < this.values[index]) {

            // swap the value of the values element at the parentIndex with the value of the element property at the child index
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]

            // set the index to be the parentIndex, and start over
            index = parentIndex;
        }
            return this.values;
    }
}

let MBH = new MaxBinaryHeap();
MBH.insert(5);
MBH.insert(16);
MBH.insert(48);
MBH.insert(3);
MBH.insert(23);
MBH.insert(45);
console.log(MBH.insert(7));