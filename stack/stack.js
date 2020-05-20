class Stack {
    constructor() {
        this.data = []
    }

    push(item) {
        this.data.push(item)
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('stack is empty')
        }
        return this.data.pop()
    }

    peek() {
        if (this.isEmpty()) return null
        return this.data[this.data.length - 1]
    }

    isEmpty() {
        return this.data.length === 0
    }

    toString() {
        return `[${this.data.join(',')}]`
    }
}

let stack = new Stack()
stack.push(4)
stack.push(5)
stack.push(6)
stack.pop()
console.log(stack.toString())
