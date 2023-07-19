// Find the Index of the First Occurrence in a String (easy) - July 19th

function strStr(haystack, needle) {
    let needleLength = needle.length

    for (let i = 0; i <= haystack.length; i++){
        
        let substring = haystack.slice(i,needle.length + i) // 
        console.log(substring)
    
        if (substring === needle){
            return i
        }
    }
    return -1

};
    /*

    needleLength = length of needle
    loop - increment by needleLength to find match

    */



strStr("sadbutsad", "sad") // 0
strStr("leetcode", "leeto") // -1

strStr("leetcode", "code") // 4

strStr("mississippi", "issi") // 1
