// Longest Palindrome - Easy (August 4th)

function longestPalindrome(str){

    let frequency = {}
    let result = 0

    for (let i = 0; i < str.length; i++){
        let char = str[i]

        frequency[char] = (frequency[char] || 0) + 1
    }

    for (let value of Object.keys(frequency)){
        result = result + value - (value % 2)
    }

    return result < str.length ? result + 1 : result

}