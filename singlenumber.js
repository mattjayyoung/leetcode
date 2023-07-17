function singleNumber(nums) {

    const numbers = nums.reduce((obj, item) => {
        if (!obj[item]){
            obj[item] = 0
        }
        obj[item]++
        return obj
    }, {})

    for (let num in numbers){
        if (numbers[num] === 1){
            return Number(num)
        }
    }
    
};


singleNumber([2,2,1]) // 1
singleNumber([4,1,2,1,2]) // 4
singleNumber([1]) // 1