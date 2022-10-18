// ================ PIVOT HELPER FUNCTION ====================

function pivot(arr, start = 0, end = arr.length - 1) {

  // grab the pivot from the start of the array
  let pivot = arr[start];

  // store the current pivot index in a variable(this will keep track of where the pivot should end up)
  let swapIndex = start;

  // loop through the array from the start until the end
  for(let i = start + 1; i < end + 1; i++) {

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
  return swapIndex;

};

// ======================== QUICK SORT FUNCTION =========================

function quickSort(arr, left = 0, right = arr.length - 1){

  // we use our if statement here so we dont get into an infinite loop
  if(left < right) {

    // heres is our first call on our complete array which gives us our starting pivotIndex variable
    let pivotIndex = pivot(arr, left, right) // 3

    // LEFT
    // here we make our recursive call on the side of the array thats left of our pivot index
    quickSort(arr, left, pivotIndex - 1);
    
    // RIGHT
    // here we make our recursive call on the side of the array thats right of our pivot index
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
