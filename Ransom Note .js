// 383. Ransom Note - Easy (Aug 2nd)

function canConstruct (ransomNote, magazine) {
    const noteHash = {}
    const magazineHash = {}

    for (char of ransomNote){
        noteHash[char] = (noteHash[char] || 0) + 1
    }

    for (char of magazine){
        magazineHash[char] = (magazineHash[char] || 0) + 1
    }

    for (key in noteHash){
        if (noteHash[key] > magazineHash[key] || !magazineHash[key]){
            return false
        }
    }
    return true
    
};


canConstruct("a", "b") // false
canConstruct("aa", "ab") // false
canConstruct("aa", "aab") // true

canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")