class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function findKthNodeFromEnd(root, k) {
    let slow = root
    let fast = root
    let count = 0
    while (count < k && fast !== null) {
        fast = fast.next
        count++
    }

    while (fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow
}

let root = new Node(1)
root.next = new Node(2)
root.next.next = new Node(3)

console.log(findKthNodeFromEnd(root, 3))
