class MinStack {
    constructor() {
        this.data = []
    }

    min() {
        return this.data[this.data.length - 1]
    }

    pop() {
        return this.data.pop()
    }

    push(item) {
        this.data.push(item)
        this.data.sort((a, b) => b - a)
    }
}


let minStack = new MinStack()
minStack.push(5)
minStack.push(2)
minStack.push(10)
minStack.push(1)

console.log(minStack.pop())
console.log(minStack.pop())
console.log(minStack.pop())
console.log(minStack.pop())

