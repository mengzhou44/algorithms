class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function reverse(node) {
    if (node === null) return null
   // if (node.next === null) return node
    let current = node.next
    let prev = node
    while (current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

let node = new Node(10)
node.next = new Node(20)
node.next.next = new Node(30)

console.log(reverse(node))
