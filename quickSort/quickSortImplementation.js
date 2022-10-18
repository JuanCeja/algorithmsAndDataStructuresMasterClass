// ================ PIVOT HELPER FUNCTION ====================

function pivot(arr, start = 0, end = arr.length - 1) {

  // grab the pivot from the start of the array
  let pivot = arr[start];

  // store the current pivot index in a variable(this will keep track of where the pivot should end up)
  let swapIndex = start;

  // loop through the array from the start until the end
  for(let i = 1; i < end + 1; i++) {

    // if the pivot is greater then the current array element, increment the pivot index variable and then swap the current element with the element at the pivot index
    if(pivot > arr[i]){
      swapIndex++;

      let temp = arr[i];
      arr[i] = arr[swapIndex];
      arr[swapIndex] = temp;
    }

  }
  
  // swap the starting element(i.e. the pivot) index
  // we need to swap our current pivot to its correct place
  // we currently have [4,2,1,3,5,7,6,8] after swap we get [3,2,1,4,5,7,6,8]
  // after the swap we put the pivot in its correct place on the array
  let temp = arr[swapIndex];
  arr[swapIndex] = arr[start];
  arr[start] = temp;

  // return the pivot index
  console.log(arr)
  return swapIndex;

};

// ======================== QUICK SORT FUNCTION =========================

function quickSort(arr, left = 0, right = arr.length - 1){
  // call the pivot helper on the array
  
  // when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index

  // your base case occurs when you consider a subarray with less than 2 elements
};

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
