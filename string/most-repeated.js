function mostRepeated(str) {
    let queue = []
    for (let c of str) {
        if (c !== ' ') {
            addToQueue(queue, c)
        }
    }
    queue.sort((a, b) => a.count < b.count)
    return queue[0].letter
}

function addToQueue(queue, c) {
    let found = queue.find((item) => item.letter === c)
    if (found === undefined) {
        queue.push({ count: 1, letter: c })
    } else {
        found.count++
    }
}

console.log(mostRepeated('HELLO, WORLDO'))
