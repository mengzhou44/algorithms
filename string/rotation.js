function areRotations(word1,word2) {
     return word1.length === word2.length && 
           (word1+word1).includes(word2)
}

// function areRotations(word1, word2) {
//     if (word1.length !== word2.length) return false

//     for (let i = 1; i <= word1.length; i++) {
//         let temp = rotate(word1)
//         if (temp === word2) {
//             return true
//         }
//     }

//     return false
// }

// function rotate(word) {
//     return word.substring(1) + word[0]
// }

console.log(areRotations('ABCD', 'BCDA'))
