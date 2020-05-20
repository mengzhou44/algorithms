function heapify(nodes) {
    for (let i = 0; i < nodes.length; i++) {
        helper(i, nodes)
    }
    return nodes
}

function helper(index, nodes) {
    let smallerChildIndex = getSmallerChildIndex(index, nodes)

    if (smallerChildIndex === index) return

    swap(nodes, index, smallerChildIndex)

    helper(smallerChildIndex, nodes)
}

function swap(nodes, i, j) {
    let temp = nodes[i]
    nodes[i] = nodes[j]
    nodes[j] = temp
}

function getSmallerChildIndex(index, nodes) {
    if (!hasLeftChild(index, nodes)) return index
    if (!hasRightChild(index, nodes)) {
        return leftChildIndex(index)
    }

    if (leftChild(index, nodes).key < rightChild(index, nodes).key) {
        return leftChildIndex(index)
    }

    return rightChildIndex(index)
}

function hasLeftChild(index, nodes) {
    return leftChildIndex(index) < nodes.length
}

function hasRightChild(index, nodes) {
    return rightChildIndex(index) < nodes.length
}

function leftChildIndex(index) {
    return index * 2 + 1
}

function rightChildIndex(index) {
    return index * 2 + 2
}

function leftChild(index, nodes) {
    return nodes[index * 2 + 1]
}

function rightChild(index, nodes) {
    return nodes[index * 2 + 2]
}

console.log(
    heapify([
        {
            key: 5,
            value: 'qqw',
        },
        {
            key: 2,
            value: 'wwe',
        },
        {
            key: 6,
            value: 'pp',
        },
        {
            key: 1,
            value: 'dd',
        },
    ])
)
