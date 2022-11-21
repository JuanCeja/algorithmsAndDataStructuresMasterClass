
// ========= OUR HELPER MERGING FUNCTION ONLY ===========

function merge(arr1, arr2){
    // create our pointer variables
    // create an empty array to push values to
    let mergedArray = [];
    let i = 0;
    let j = 0;
    
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
        mergedArray.push(arr1[i]);
        i++;
    }
    
    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }

    // return our merged sorted array
    return mergedArray;
};

// =========== RECURSIVE MERGE SORT HERE ===========

function mergeSort(arr){
    // base case
    if(arr.length <= 1) return arr;

    // we find our mid so we can keep splitting
    let mid = Math.floor(arr.length / 2);

    // we make our recursive calls on every half of the array
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
}

console.log(mergeSort([10,24,76,73,72,1,9]))
