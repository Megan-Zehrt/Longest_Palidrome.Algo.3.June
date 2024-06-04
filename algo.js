// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest
// palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.







/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let hashTable = new Map()
    let count = 0
    let hasOdd = false

    for(let i = 0; i < s.length; i++){
        if(hashTable.has(s[i])){
            hashTable.set(s[i], hashTable.get(s[i]) +1)
        } else{
            hashTable.set(s[i], 1)
        }
    }

    for(let [key, value] of hashTable){
        count += Math.floor(value / 2) * 2

        if(value % 2 == 1){
            hasOdd = true
        }
    }

    if(hasOdd){
        count += 1
    }

    return count
};

