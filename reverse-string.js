function reverseString(str) {
    if (str === null) return null
    let stack = str.split('')
    let result = []
    while (stack.length > 0) {
        result.push(stack.pop())
    }
    return result.join('')
}

console.log(reverseString(null))
console.log(reverseString('abcd'))
