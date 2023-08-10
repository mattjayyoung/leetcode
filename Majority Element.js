// Majority Element - Easy (August 9th)

function majorityElement(nums) {

    const frequency = nums.length / 2

    let hash = {}

    for (let num of nums){
        hash[num] = (hash[num] || 0 ) + 1
    }

    for (key in hash){
        if (hash[key] > frequency) return Number(key)
    }
    
};

majorityElement([3,2,3]) // 3
majorityElement([2,2,1,1,1,2,2]) // 2
