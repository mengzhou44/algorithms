class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function findMidFromLinkedList(root) {
    if (root === null || root.next === null) return root
    let last = getLast(root)
    let slow= root 
    let fast = root 
    while(fast!==last && fast.next!== last) {
       fast = fast.next.next 
       slow = slow.next 
    }
    if (fast === last) {
       return slow 
    }

    return slow.next
}

function getLast(root) {
     if (root === null )  return root 
     let node = root 
     while(node.next) {
        node = node.next 
     }
     return node 
}

let node = new Node(1)
node.next = new Node(2)
node.next.next = new Node(3)
node.next.next.next = new Node(4)

console.log(findMidFromLinkedList(node))
