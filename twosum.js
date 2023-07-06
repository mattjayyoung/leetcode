//Two Sum - Easy ( July 6th )

function twoSum(nums,target){

for (let i = nums.length; i > 0; i--){
    for (let j = 0; j <= nums.length; j++){
        if (nums[i] + nums[j] === target && i !== j){
            return [j, i]
        }
    }
}
}
