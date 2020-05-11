class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function reverse(head) {
     if (head === null )  return head
     let prev = head
     let current = head.next
     head.next = null 
     while(current!==null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
     }
     return prev
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
console.log(reverse(head))

class LinkedList {
    constructor() {
        this.first = null
        this.last = null
    }

    addLast(val) {
        let newNode = new Node(val)
        if (this.isEmpty()) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
    }

    addFirst(val) {
        let node = new Node(val)
        if (this.isEmpty()) {
            this.first = node
            this.last = node
        } else {
            node.next = this.first
            this.first = node
        }
    }

    indexOf(val) {
        let index = 0
        let current = this.first
        while (current) {
            if (current.val === val) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    contains(val) {
        let node = this.first
        while (node) {
            if (node.val === val) {
                return true
            }
            node = node.next
        }
        return false
    }

    removeFirst() {
        if (this.isEmpty()) {
            throw new Error('list is empty!')
        }
        if (this.first === this.last) {
            this.first = null
            this.last = null
        } else {
            let second = this.first.next
            this.first.next = null
            this.first = second
        }
    }

    removeLast() {
        if (this.isEmpty()) {
            throw new Error('list is empty!')
        }
        if (this.first === this.last) {
            this.first = null
            this.last = null
        } else {
            let previous = this.getPrevious(this.last)
            previous.next = null
            this.last = previous
        }
    }

    size() {
        let result = 0
        let current = this.first
        while (current) {
            current = current.next
            result++
        }
        return result
    }

    toArray() {
        let result = []
        let current = this.first
        while (current) {
            result.push(current.val)
            current = current.next
        }
        return result
    }

    getPrevious(node) {
        let current = this.first
        while (current) {
            if (current.next === node) {
                return current
            }
            current = current.next
        }
        return null
    }

    isEmpty() {
        return this.first === null
    }
}

let list = new LinkedList()
list.addLast(12)
list.addLast(14)
list.addFirst(5)
let array = list.toArray()
console.log('array', array)
console.log('size', list.size())
console.log(list.first)
console.log(list.last)
console.log(list.indexOf(14))
console.log(list.contains(-4))
list.removeLast()
console.log(list.last)
console.log(list.size())
