class Queue {
    constructor() {
        this.primary = []
        this.secondary = []
    }

    enqueue(item) {
        this.primary.push(item)
    }
    dequeue() {
        if (this.primary.length === 0) {
            throw new Error('queue is empty!')
        }
        while (this.primary.length > 0) {
            this.secondary.push(this.primary.pop())
        }

        let temp = this.secondary.pop()
        while (this.secondary.length > 0) {
            this.primary.push(this.secondary.pop())
        }
        return temp 
    }
}


let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)

console.log(queue.dequeue())