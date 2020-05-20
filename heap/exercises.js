class Heap {
    constructor() {
        this.data = []
    }

    insert(val) {
        this.data.push(val)
        this.bubbleUp()
    }

    bubbleUp() {
        let currentIndex = this.data.length - 1
        let parentIndex = this.parentIndex(currentIndex)
        while (parentIndex >= 0) {
            if (this.data[currentIndex] > this.data[parentIndex]) {
                this.swap(this.data, currentIndex, parentIndex)
                currentIndex = parentIndex
                parentIndex = this.parentIndex(currentIndex)
            } else {
                break
            }
        }
    }

    remove() {
        if (this.data.length === 1) {
            return this.data.pop()
        }
        let result = this.data[0]
        this.data[0] = this.data.pop()

        this.bubbleDown()
        return result
    }

    bubbleDown() {
        let currentIndex = 0
        while (
            currentIndex < this.data.length &&
            !this.isValidParent(currentIndex)
        ) {
            let temp = this.largerChildIndex(currentIndex)
            this.swap(this.data, currentIndex, temp)
            currentIndex = temp
        }
    }

    largerChildIndex(index) {
        if (this.leftChild(index) > this.rightChild(index)) {
            return this.leftChildIndex(index)
        }
        return this.rightChildIndex(index)
    }

    isValidParent(index) {
        if (!this.hasLeftChild(index)) return true
        if (!this.hasRightChild(index))
            return this.data[index] > this.leftChild(index)

        return (
            this.data[index] > this.leftChild(index) &&
            this.data[index] > this.rightChild(index)
        )
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    leftChild(index) {
        return this.data[this.leftChildIndex(index)]
    }

    rightChild(index) {
        return this.data[this.rightChildIndex(index)]
    }

    leftChildIndex(index) {
        return index * 2 + 1
    }

    rightChildIndex(index) {
        return index * 2 + 2
    }

    hasLeftChild(index) {
        return this.leftChildIndex(index) < this.data.length
    }

    hasRightChild(index) {
        return this.rightChildIndex(index) < this.data.length
    }

    swap(nums, i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
}

 




let heap = new Heap()
heap.insert(10)
heap.insert(5)
heap.insert(17)
heap.insert(4)
heap.insert(22)
console.log(heap.data)

console.log('removed', heap.remove())
console.log(heap.data)
