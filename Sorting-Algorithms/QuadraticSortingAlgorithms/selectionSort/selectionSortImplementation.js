function selectionSort(arr){

    // use a outer loop to 
    for(let i = 0; i < arr.length; i++){
        
        // we save the index of our minimum number which should be our first element of our iteration
        let minimum = i;

        // use a inner loop to iterate through and compare our values
        for(let j = i + 1; j < arr.length; j++){

            // compare our current iteration element to our element at the minimum var indice
            // if current element is smaller than our value at our minimum indice in our array we set a new minimum to our current element in the loop
            if(arr[j] < arr[minimum]) {
                minimum = j;
            }
        }
        
        // we make the swap of our current outter iteration element with our minimum value at its indice
        let temp = arr[minimum];
        arr[minimum] = arr[i];
        arr[i] = temp;
    }

    // return our sorted array
    return arr;
};

console.log(selectionSort([5,7,3,8,10,17,1]))z