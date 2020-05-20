class Queue {
    constructor() {
        this.data = []
    }

    add(item) {
        this.data.push(item)
    }

    remove() {
        if (!this.isEmpty()) {
            return this.data.shift()
        }
    }

    isEmpty() {
        return this.data.length === 0
    }
    toArray() {
        return this.data
    }

    reverse() {
        let newQueue = new Queue()
        let stack = []
        while (!this.isEmpty()) {
            stack.push(this.remove())
        }
        while (stack.length > 0) {
            newQueue.add(stack.pop())
        }
        return newQueue
    }
}

let queue = new Queue()
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)

console.log(queue.reverse())
