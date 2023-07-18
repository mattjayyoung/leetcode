// 125. Valid Palindrome (small) - July 18th 
function isPalindrome (s) { // 68ms
    if (!s){
        return true
    } else {

    let alphaNum = s.toLowerCase().match(/[a-z0-9]/g) || []
    
    
    for (let i = 0; i < alphaNum.length / 2; i++){
         if (alphaNum[i] !== alphaNum[alphaNum.length - i - 1]){
            return false
        }  
     }
     return true
}

}

isPalindrome("A man, a plan, a canal: Panama") // true
isPalindrome("race a car") // false
isPalindrome("")
isPalindrome(null)