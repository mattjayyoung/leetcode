// 202. Happy Number (not optimized) (easy) - July 21st

function isHappy (n) {
    if (n === 1) return true

    if (n < 10 && n !== 7) return false

    // if (n < 10) return false
    
    let breakdown = n.toString().split('').map(num => Number(num) ** 2).reduce((acc,curr) => acc + curr)
    
    
    console.log(breakdown)
    

    return isHappy(breakdown)

};

isHappy(19) //  true
isHappy(7) // true
isHappy(2) // false
isHappy(4) // false
isHappy(5) // false
isHappy(6) // false
isHappy(8) // false
isHappy(9) // false
isHappy(11)

4 ** 2  && 9**2 = 16 + 81 = 97
9 ** 2  && 7**2 = 81 + 49 = 130
1 ** 2 && 3**2 = 1 + 9 = 10
1 ** 2

