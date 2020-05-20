class PriorityQueue {
    constructor(compareFunc) {
        this.data = []
        this.count = 0
        this.compareFunc = compareFunc
    }

    enqueue(item) {
        let index = this.shiftItemsToInsert(item)
        this.data[index] = item
        this.count++
    }

    shiftItemsToInsert(item) {
        if (this.count === 0) return 0
        let index = this.count - 1
        while (index >= 0) {
            if (this.compareFunc(this.data[index], item)) {
                this.data[index + 1] = this.data[index]
            } else {
                break
            }
            index--
        }
        return index+1
    }

    dequeue() {
        if (this.count > 0) {
            this.count--
            return this.data.shift()
        }
        return null
    }

    isEmpty() {
        return this.count === 0
    }

    toString() {
        return this.data
    }
}

let q = new PriorityQueue((a, b) => a > b)
q.enqueue(33)
q.enqueue(5)
q.enqueue(67)

console.group(q)
