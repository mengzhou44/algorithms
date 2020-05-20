function heapify(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        helper(i, numbers)
    }
    return numbers
}

function  helper(index, numbers) {
    let childIndex = largerChildIndex(index, numbers)
    
    if (childIndex === index)  {
      return
    }
    swap(childIndex, index, numbers)

    helper(childIndex, numbers)
}

function largerChildIndex(index, numbers) {
   
    if (!hasLeftChild(index, numbers)) {
        return index
    }

    if (!hasRightChild(index, numbers)) {
        return leftChildIndex(index)
    }
    return leftChild(index, numbers) > rightChild(index, numbers)
        ? leftChildIndex(index)
        : rightChildIndex(index)
}

function swap(i, j, numbers) {
    let temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
}

function leftChild(index, numbers) {
    return numbers[leftChildIndex(index)]
}

function rightChild(index, numbers) {
    return numbers[rightChildIndex(index)]
}

function leftChildIndex(index) {
    return index * 2 + 1
}

function rightChildIndex(index) {
    return index * 2 + 2
}

function hasLeftChild(index, numbers) {
    return leftChildIndex(index) < numbers.length
}

function hasRightChild(index, numbers) {
    return rightChildIndex(index) < numbers.length
}

console.log(heapify([5,3,8,4,1,2]))
