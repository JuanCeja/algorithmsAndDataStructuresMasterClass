function selectionSort(arr){

    // create our outer loop
    for(let i = 0; i < arr.length; i++) {

        // create our inner loop to compare the remaining elements to our current element in our outer loop
        for(let j = i + 1; j < arr.length; j++) {

            // set our minimum var to the index of i
            let minimum = i;

            // we compare our i(mininum) element to our current element(j)
            if(arr[j] < arr[i]){

                // if j is less than our minimum we reassign minimum
                minimum = j;
            }

            // we make our swap from our current minimum to our current element in our otter loop
            // but only if the indices do not match so we dont make unnecessary swaps
            if(i !== minimum) {
                let temp = arr[minimum];
                arr[minimum] = arr[i];
                arr[i] = temp;
            }
        }
    }
        // return our sorted array
        return arr;
};

console.log(selectionSort([5,7,3,8,10,17,1]))