function numberOfVowels(str) {
    let count = 0
    for (let c of str) {
        if ('aeiou'.includes(c.toLowerCase())) {
            count++
        }
    }
    return count
}

console.log(numberOfVowels('hello'))

function reverseString(str) {
    let temp = []
    for (let c of str) {
        temp.unshift(c)
    }
    return temp.join('')
}

function reverseString1(str) {
    if (str === '') return ''

    return reverseString1(str.substring(1)) + str[0]
}

console.log('reversed: ' + reverseString('hello'))
console.log('reversed: ' + reverseString1('hello'))

function reverseWords(str) {
    let words = str.split(' ').reverse()
    return words.join(' ')
}

console.log(reverseWords('Trees are beautiful'))

function areRotations(word1, word2) {
    if (word1.length !== word2.length) return false

    return (word1 + word1).includes(word2)
}

console.log(areRotations('ABCD', 'DABC'))

function removeDuplicates(str) {
    let result = []
    for (let c of str) {
        if (!result.includes(c)) {
            result.push(c)
        }
    }
    return result.join('')
}

console.log(removeDuplicates('Hellooo!!'))

function findMostRepeated(str) {
    let queue = []
    for (let c of str) {
        let found = queue.find((item) => item.letter === c)
        if (found === undefined) {
            queue.push({ letter: c, count: 1 })
        } else {
            found.count++
        }
    }
    queue.sort((a, b) => b.count > a.count)
    return queue[0].letter
}

console.log(findMostRepeated('Hellooo!!'))

function capitalize(str) {
    let words = str
        .split(' ')
        .filter((item) => item !== '')
        .map((item) => item[0].toUpperCase() + item.substring(1).toLowerCase())

    return words.join(' ')
}

console.log(capitalize('trees are beautiful'))
console.log(capitalize('trees     are     beautiful'))

function areAnagrams(word1, word2) {
    let temp1 = sort(word1)
    let temp2 = sort(word2)
    console.log(temp1)
    console.log(temp2)
    return temp1 === temp2
}

function sort(word) {
    return word
        .split('')
        .sort((a, b) => a > b)
        .join('')
}

console.log(areAnagrams('abcd', 'dacb'))

function isPalindrome(str) {
    let array = str.split('')
    return helper(array)
    function helper(array) {
        if (array.length < 2) return true
        let first = array.shift()
        let last = array.pop()
        if (first !== last) return false
        return helper(array)
    }
}

function isPalindrome1(str) {
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

function isPalindrome2(str) {
    if (str.length < 2) return true
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome('abcba1'))
console.log(isPalindrome1('abcba'))
console.log(isPalindrome2('abcba'))
