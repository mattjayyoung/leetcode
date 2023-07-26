// Binary Search - Easy (July 25th)

function search (nums, target) {

// Declare left (beginning of array) and right (end of array) pointer
let [left, right] = [0, nums.length - 1]


while (left <= right){

    // Determine the middle by adding the start and end pointer and using '>>' operator to divide the array in half once
    const middle = (left + right) >> 1;

    // Declare the middle as the guess
    const guess = nums[middle]

    // If the guess (which is the middle) is the target, return the middle's index

    if (guess === target) return middle

    // if the guess is less than the target, move the left pointer to the right of middle

    if(guess < target) left = middle + 1

    // if the guess is larger than the target, move the right pointer to the left of middle


    if (guess > target) right = middle - 1
}

return -1

};

search([-1,0,3,5,9,12], 9) // 4