function reverseFirstKElements(queue, k) {
    let array= []
    let count = 0
    while (count < k) {
        array.push(queue.shift())
        count++
    }
    while (array.length > 0) {
        queue.unshift(array.shift())
    }
    return queue
}

let queue = [1, 2, 3, 4, 5]

let reversed = reverseFirstKElements(queue, 3)

console.log(reversed)
