function merge(arr1, arr2){
    // create our pointer variables
    // create an empty array to push values to
    let i = 0;
    let j = 0;
    let mergedArray = [];
    
    // use a while loop starting at the beginning of both arrays 
    while(i < arr1.length && j < arr2.length){

        // compare values and push the smaller value until one arrays reaches its end
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // make 2 more while loops that will push remaining values
    while(i < arr1.length){
        mergedArray.push(arr1[1]);
        i++;
    }
    
    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }

    // return our merged sorted array
    return mergedArray;
};

// this will only work if both arrays are already sorted
console.log(merge([1,10,50], [2,14,50,99,100]));