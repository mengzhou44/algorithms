function capitalize(str) {
    let words = str.split(' ').filter(word=> word!=='')
    words = words.map((word) => capitalizeWord(word))

    return words.join(' ')
}

function capitalizeWord(word) {
   
    let first = word[0]
    let rest = word.substring(1)

    return first.toUpperCase() + rest.toLowerCase()
}

console.log(capitalize('hello, world'))
console.log(capitalize('   '))
