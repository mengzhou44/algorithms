class PriorityQueue {
    constructor(compareFunc) {
        this.data = []
        this.count = 0
        this.compareFunc = compareFunc
    }

    addAll(items) {
        for (let item of items) {
            this.enqueue(item)
        }
    }
    enqueue(item) {
        if (this.count === 0) {
            this.data.push(item)
        } else {
            let index = this.count - 1
            while (index >= 0) {
                if (this.compareFunc(this.data[index], item)) {
                    this.data[index + 1] = this.data[index]
                } else {
                    break
                }
                index--
            }
            this.data[index + 1] = item
        }

        this.count++
    }

    dequeue() {
        if (this.data.length > 0) {
            this.count--
            return this.data.shift()
        }
        return null
    }

    isEmpty() {
        return this.data.length === 0
    }
}

module.exports = PriorityQueue

// let q = new PriorityQueue()
// q.enqueue(33)
// q.enqueue(5)
// q.enqueue(67)

// while (!q.isEmpty()) {
//     console.log(q.dequeue())
// }
