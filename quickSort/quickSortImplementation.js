// ================ PIVOT HELPER FUNCTION ====================

function pivot(arr, start = 0, end = arr.length - 1) {

  // grab the pivot from the start of the array
  let pivot = arr[start];

  // store the current pivot index in a variable(this will keep track of where the pivot should end up)
  let pivotIndex = start;

  // loop through the array from the start until the end
  for(let i = 1; i < end + 1; i++) {

    // if the pivot is greater then the current array element, increment the pivot index variable and then swap the current element with the element at the pivot index
    if(pivot > arr[i]){
      pivotIndex++;

      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }

  }
  
  // swap the starting element(i.e. the pivot) index
  // we need to swap our current pivot to its correct place
  // we currently have [4,2,1,3,5,7,6,8] after swap we get [3,2,1,4,5,7,6,8]
  // after the swap we put the pivot in its correct place on the array
  let temp = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = temp;

  // return the pivot index
  return pivotIndex;

};

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))