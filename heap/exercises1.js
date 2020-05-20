const Heap = require('./heap')

function heapify(nums) {
    for (let i = 0; i < Math.floor(nums.length / 2) - 1; i++) {
        helper(i, nums)
    }
    return nums
}

function helper(index, nums) {
    let largerChildIndex = getLargerChildIndex(index, nums)

    if (largerChildIndex === index) return

    swap(nums, index, largerChildIndex)

    helper(largerChildIndex, nums)
}

function swap(numbers, i, j) {
    let temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
}

function getLargerChildIndex(index, nums) {
    if (!hasLeftChild(index, nums)) return index
    if (!hasRightChild(index, nums)) {
        if (leftChild(nums, index) > nums[index]) {
            return leftChildIndex
        }
        return index
    }

    if (
        nums[index] > leftChild(nums, index) &&
        nums[index] > rightChild(nums, index)
    ) {
        return index
    }

    if (
        leftChild(nums, index) > nums[index] &&
        leftChild(nums, index) > rightChild(nums, index)
    ) {
        return leftChildIndex(index)
    }

    return rightChildIndex(index)
}

function hasLeftChild(index, nums) {
    return leftChildIndex(index) < nums.length
}

function hasRightChild(index, nums) {
    return rightChildIndex(index) < nums.length
}

function leftChildIndex(index) {
    return index * 2 + 1
}

function rightChildIndex(index) {
    return index * 2 + 2
}

function leftChild(nums, index) {
    return nums[index * 2 + 1]
}

function rightChild(nums, index) {
    return nums[index * 2 + 2]
}

function largestKItem(nums, K) {
    let heap = new Heap()
    for (let num of nums) {
        heap.insert(num)
    }
    let count = 0
    let result
    while (count < K) {
        result = heap.remove()
        count++
    }

    return result
}

function isMaxHeap(nums, index = 0) {
    if (index >= nums.length) {
        return true
    }

    if (!hasLeftChild(index, nums) && !hasRightChild(index, nums)) {
        return true
    }

    if (!hasRightChild(index, nums)) {
        if (nums[index] < leftChild(index, nums)) {
            return false
        }
        return true
    }

    if (
        nums[index] < leftChild(index, nums) ||
        nums[index] < rightChild(index, nums)
    ) {
        return false
    }
    return (
        isMaxHeap(nums, leftChildIndex(index)) &&
        isMaxHeap(nums, rightChildIndex(index))
    )
}

function hasLeftChild(index, nums) {
    let result = leftChildIndex(index) < nums.length

    return result
}

function hasRightChild(index, nums) {
    return rightChildIndex(index) < nums.length
}

function leftChildIndex(index) {
    return index * 2 + 1
}

function rightChildIndex(index) {
    return index * 2 + 2
}

function leftChild(index, nums) {
    return nums[index * 2 + 1]
}

function rightChild(index, nums) {
    return nums[index * 2 + 2]
}

console.log(heapify([5, 3, 8, 4, 1, 2]))

console.log(largestKItem([5, 3, 8, 4, 1, 2], 2))

console.log(isMaxHeap([9, 4, 5, 3, 1, 2]))
