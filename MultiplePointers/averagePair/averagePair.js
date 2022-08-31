// Multiple Pointers - averagePair

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// ============================================================================================================

function averagePair(arr, target){
// create 2 pointers and temp value 
let left = 0;
let right = arr.length - 1;
let temp = 0;

// have a while loop with pointers at beginning and end
    while(left < right){

        // add both pointers from the array and divide by 2 to see if it equals target return true
        temp = (arr[left] + arr[right]) / 2;
        if(temp === target) return true;

        // if temp value is < target move left pointer up
        if(temp < target) {
            left++;
        } 
        
        // if temp value is > move right pointer down
        else {
            right--;
        }
    }
    // if target is not found return false
    return false;
};

console.log(averagePair([1,2,3],2.5));
// true

console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
// true

console.log(averagePair([-1,0,3,4,5,6], 4.1));
// false

console.log(averagePair([],4));
// false