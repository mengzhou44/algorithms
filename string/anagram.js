// function areAnagrams(word1, word2) {
//     return sortWord(word1) === sortWord(word2)
// }

// function sortWord(word) {
//     let array = word.split('')
//     array.sort((a, b) => a < b)
//     return array.join('')
// }

function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) return false
    let queue1 = createQueue(word1)
    let queue2 = createQueue(word2)

    if (queue1.length !== queue2.length) return false
    for (let i = 0; i < queue1.length; i++) {
        if (
            queue1[i].letter !== queue2[i].letter ||
            queue1[i].count !== queue2[i].count
        ) {
            console.log(queue1[i], queue2[i])
            return false
        }
    }
    return true
}

function createQueue(word) {
    let queue = []
    for (let c of word) {
        const found = queue.find((item) => item.letter === c)
        if (found === undefined) {
            queue.push({ letter: c, count: 1 })
        } else {
            found.count++
        }
    }
    let sorted = queue.sort((a, b) => a.letter < b.letter)

    return sorted
}

console.log(areAnagrams('ABCD', 'DBCA'))
