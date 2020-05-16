function reverse(str) {
    let result = []
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i])
    }
    return result.join('')
}

console.log(reverse('ABCDE'))
