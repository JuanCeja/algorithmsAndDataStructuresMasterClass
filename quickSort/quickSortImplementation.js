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

function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right){
      let pivotIndex = pivot(arr, left, right) //3
      //left
      quickSort(arr,left,pivotIndex-1);
      //right
      quickSort(arr,pivotIndex+1,right);
    }
   return arr;
} 
         
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1

console.log(pivot([4,8,2,1,5,7,6,3]));