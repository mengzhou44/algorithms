function removeDuplicates(str) {
    let result = []
    for (let c of str) {
        if (!result.includes(c)) {
            result.push(c)
        }
    }
    return result.join('')
}


console.log(removeDuplicates("AADESSWSS"))