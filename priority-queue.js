class PriorityQueue {
    constructor() {
        this.data = []
        this.count = 0
    }

    enqueue(item) {
        if (this.count === 0) {
            this.data[0] = item
        } else {
            let index = this.count - 1
            while (index >= 0) {
                if (this.data[index] > item) {
                    this.data[index + 1] = this.data[index]
                } else {
                    break
                }
                index--
            }
            this.data[index+1] = item
        }

        this.count++
    }

    dequeue() {
        if (this.data.length > 0) {
            return this.data.shift()
        }
        return null
    }

    isEmpty() {
        return this.data.length === 0
    }
}

let q = new PriorityQueue()
q.enqueue(33)
q.enqueue(5)
q.enqueue(67)

while (!q.isEmpty()) {
    console.log(q.dequeue())
}
