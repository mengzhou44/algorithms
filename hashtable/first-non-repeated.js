function firstNonRepeated(str) {
    let array = []
    for (let c of str) {
        let found = array.find((item) => item.letter === c)
        if (found === undefined) {
            array.push({ letter: c.toLowerCase(), count: 1 })
        } else {
            found.count++
        }
    }

    for(let item of array) {
        if (item.count === 1) {
           return item.letter
        }
    }

    throw new Error("not found")
}

console.log(firstNonRepeated('A green apple'))
