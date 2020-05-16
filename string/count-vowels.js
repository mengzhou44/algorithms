function countVowels(str) {
    let count = 0
    for (let i=0; i<str.length; i++) {
        if ('AEIOU'.includes(str[i].toUpperCase())) {
            count++
        }
    }
    return count
}


console.log(countVowels('HELLO, WORLD'))
