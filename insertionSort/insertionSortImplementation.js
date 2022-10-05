function insertionSort(arr) {
    // our outer loop to keep track of our current position. this will be new value we will be introducing
    for(let i = 1; i < arr.length; i++){

        // our inner loop so we can compare values and make swaps if necessary. we start j at i because thats the new value we are introducing and want to compare. 
        for(let j = i; j > 0; j--){

            // if our current value is smaller than the previous value make a swap
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]

                // if no swap is made break out of the loop. theres no reason to check the other values if they have already been swapped otherwise keep going looking for smaller value
            } else {
                break;
            }
        }
    }

    // return our sorted array
    return arr;
};

console.log(insertionSort([4,2,7,19,2,17]));
