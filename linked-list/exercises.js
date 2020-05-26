class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function reverse(root) {
    if (root === null) {
        return root
    }
    let prev = root
    let current = root.next
    while (current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

let root = new Node(1)
root.next = new Node(2)
root.next.next = new Node(3)

console.log(reverse(root))

console.log('Find Mid ..... ')
function findMid(root) {
    let slowP = root
    let fastP = root

    let last = getLast(root)

    while (fastP !== last && fastP.next !== last) {
        slowP = slowP.next
        fastP = fastP.next.next
    }
    if (fastP === last) {
        return slowP
    }
    return [slowP, slowP.next]
}

function getLast(root) {
    if (root === null) return root
    let current = root
    while (current.next) {
        current = current.next
    }
    return current
}

let root1 = new Node(1)
root1.next = new Node(2)
root1.next.next = new Node(3)
root1.next.next.next = new Node(4)

console.log(findMid(root1))

root1.next.next.next.next = new Node(5)
console.log(findMid(root1))
