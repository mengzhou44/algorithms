const Heap = require('./heap')

class PriorityQueue {
    constructor() {
        this.data = new Heap()
    }

    enqueue(item) {
        this.data.insert(item)
    }

    dequeue() {
        return this.data.remove()
    }

    isEmpty() {
        return this.data.isEmpty()
    }
}

let q = new PriorityQueue()
q.enqueue(33)
q.enqueue(5)
q.enqueue(67)

while (!q.isEmpty()) {
    console.log(q.dequeue())
}
