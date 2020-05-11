class ArrayQueue {
    constructor(capacity) {
        this.capacity = capacity
        this.data = new Array(capacity).fill(0)
        this.count = 0
        this.rear = 0
        this.front = 0
    }

    enqueue(item) {
        if (this.count === this.capacity) {
            throw new Error('Queue is full!')
        }
        this.data[this.rear] = item
        this.rear = (this.rear + 1) % this.capacity
        this.count++
    }

    dequeue() {
        if (this.count === 0) {
            throw new Error('Queue is empty!')
        }
        let item = this.data[this.front]
        this.data[this.front] = 0
        this.front = (this.front + 1) % this.capacity

        this.count--
        return item
    }

    toString() {
        return `[${this.data.join(',')}]`
    }
}

let queue = new ArrayQueue(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(5)

queue.dequeue()
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(6)


console.log(queue.toString())
