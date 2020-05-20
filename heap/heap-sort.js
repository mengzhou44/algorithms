const Heap = require('./heap')

let heap = new Heap()
heap.insert(5)
heap.insert(3)
heap.insert(10)
heap.insert(1)
heap.insert(4)
heap.insert(2)

let result = []
while (!heap.isEmpty()) {
    result.unshift(heap.remove())
}
console.log(result)
