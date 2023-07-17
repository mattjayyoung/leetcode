// 557. Reverse Words in a String III (Easy) - July 17th

function reverseWords(s){
    return s.split(' ').map(word => word.split('').reduce((acc,curr) => curr + acc, "")).join(' ')
    
};


reverseWords("Let's take LeetCode contest")
reverseWords("God Ding")