function bubbleSort(arr){
    // loop through our arr
    for(let i = 0; i < arr.length; i++){

        // this will be our inner array. it will execute through every iteration of our first loop
        for(let j = 0; j < arr.length; j++) {

            // if our current element is greater than our next element we swap them
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            // now we repeat the process and moving onto our next element in our outer loop 
        }
    }

    // return our sorted array
    return arr;
}

console.log(bubbleSort([8, 4, 6, 2, 9, 1, 23]));