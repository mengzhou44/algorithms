function palindrome(word) {
    let left = 0
    let right = word.length - 1
    while (left < right) {
        if (word[left] !== word[right]) {
            return false
        }
        left++
        right--
    }
    return true
}


console.group(palindrome('ABBc'))