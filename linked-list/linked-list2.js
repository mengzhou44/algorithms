class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    addFirst(val) {
        let node = new Node(val)
        if (this.head === null) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
    }

    addLast(val) {
        let node = new Node(val)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }

    indexOf(val) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.val === val) return index
            current = current.next
            index++
        }
        return -1
    }

    contains(val) {
        let current = this.head
        while (current) {
            if (current.val === val) return true
            current = current.next
        }
        return false
    }

    removeFirst() {
        if (this.head === null) return
        this.head = this.head.next
    }

    removeLast() {
        if (this.head === null) return
        if (this.head.next === null) {
            this.head = null
        }
        let current = this.head
        let previous = null
        while (current && current.next) {
            previous = current
            current = current.next
        }
        previous.next = null
    }

    size() {
        if (this.head === null) return 0
        let count = 0
        let current = this.head
        while (current) {
            current = current.next
            count++
        }
        return count
    }

    getPrevious(node) {
        if (this.head === null) return null
        let current = this.head
        while (current) {
            if (current.next === node) {
                return current
            }
            current = current.next
        }
        return null
    }

    isEmpty() {
        return this.head === null
    }

    toArray() {
        let result = []
        let current = this.head
        while (current) {
            result.push(current.val)
            current = current.next
        }
        return result
    }
}

let list = new LinkedList()
list.addLast(12)
list.addLast(14)
list.addFirst(5)
console.log(list.toArray())
console.log('size', list.size())

console.log(list.head)
console.log(list.indexOf(14))
console.log(list.contains(-4))
list.removeLast()
console.log(list.last)
console.log(list.size())
