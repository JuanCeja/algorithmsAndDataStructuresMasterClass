function bubbleSort(arr){
    // loop through our arr
    // WE GO BACKWARDS in our array so we have a smaller value of which is i
    for(let i = arr.length; i > 0; i--){
        // this will be our inner array. it will execute through every iteration of our first loop
        // NOW WE HAVE LESS COMPARISONS to compare because i is a smaller value. we have no longer have to go through every comparison again that have already been compared. this reduces our comparisons

        for(let j = 0; j < i - 1; j++) {

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