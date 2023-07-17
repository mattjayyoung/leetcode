function isPalindrome (str) {
    return str === Number(str.toString().split('').reduce((acc,curr) => curr + acc, ""))  
};

isPalindrome(121) // true
isPalindrome(-121) // false, 121-
isPalindrome(10) // false, 01
