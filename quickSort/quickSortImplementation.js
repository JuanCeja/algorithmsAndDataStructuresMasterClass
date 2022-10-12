function pivot(arr,start = 0, end = arr.length - 1){
    // grab the pivot from the start of the array

    // store the current pivot index in a variable(this will keep track of where the pivot should end up)

    // loop through the array from the start until the end

        // if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index

    // swap the starting element(i.e. the pivot) with the pivot index

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
      };
    
      // We are assuming the pivot is always the first element
      let pivot = arr[start];
      let swapIdx = start;
    
      for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
          swapIdx++;
          swap(arr, swapIdx, i);
        }
      }
    
      // Swap the pivot from the start the swapPoint
      swap(arr, start, swapIdx);
      return swapIdx;
};

console.log(pivot([4,8,2,1,5,7,6,3]));