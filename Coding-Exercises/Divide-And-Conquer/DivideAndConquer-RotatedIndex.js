// Divide and Conquer - findRotatedIndex

// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity - O(log n)

// Space Complexity - O(1)

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5

// =================================================================================================================================================================================

function findRotatedIndex(array, number) {
    let start = 0;
    let end = array.length;
    let rotated;
    let middle;

    let first = array[start];
    let last = array[end - 1];

    while (start < end) {
        rotated = Math.floor((start + end) / 2);
        if (array[rotated - 1] > array[rotated]) break;
        if (array[rotated] >= first && array[rotated] >= last) {
            start = rotated + 1;
        } else if (array[rotated] <= first && array[rotated] <= last) {
            end = rotated;
        }
    }

    start = 0;
    end = array.length;

    if (number <= last) {
        start = rotated;
    }
    if (number >= first) {
        end = rotated;
    }

    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        if (array[middle] < number) {
            start = middle + 1;
        } else if (array[middle] > number) {
            end = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)) // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)) // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)) // 5

