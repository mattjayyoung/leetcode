// 217. Contains Duplicate (easy) - July 22nd


//Optimized Solution

function containsDuplicate(nums) {

    let unique = new Set()

    for (let i = 0; i < nums.length; i++){
        if (unique.has(nums[i])){
            return true
        } else {
            unique.add(nums[i])
        }
    }
    return false
    
};

containsDuplicate([1,2,3,1]) // true
containsDuplicate([1,2,3,4]) // false
containsDuplicate([1,1,1,3,3,4,3,2,4,2])// true

//My Solution
function containsDuplicate(nums) {

    let hash = {}

    for (let num of nums){
        hash[num] = (hash[num] || 0) + 1
    }

    for (key in hash){
        if (hash[key] > 1) return true
    }

    return false
    
};

