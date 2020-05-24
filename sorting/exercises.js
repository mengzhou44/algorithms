function bubbleSort(nums) {
    if (nums.length < 2) return nums
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                swap(nums, i, j)
            }
        }
    }
    return nums
}

function selectionSort(nums) {
    if (nums.length < 2) return nums
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        swap(nums, i, minIndex)
    }
    return nums
}

function insertionSort(nums) {
    if (nums.length < 2) return nums
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = current
    }
    return nums
}

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

function mergeSort(nums) {
    if (nums.length < 2) return nums
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    let leftSorted = mergeSort(left)
    let rightSorted = mergeSort(right)

    let leftIndex = 0
    let rightIndex = 0
    let result = []
    while (leftIndex < leftSorted.length && rightIndex < rightSorted.length) {
        if (leftSorted[leftIndex] < rightSorted[rightIndex]) {
            result.push(leftSorted[leftIndex])
            leftIndex++
        } else {
            result.push(rightSorted[rightIndex])
            rightIndex++
        }
    }
    while (leftIndex < leftSorted.length) {
        result.push(leftSorted[leftIndex])
        leftIndex++
    }
    while (rightIndex < rightSorted.length) {
        result.push(rightSorted[rightIndex])
        rightIndex++
    }
    return result 
}

console.log(bubbleSort([12, 3, 17, 5]))
console.log(selectionSort([12, 3, 17, 5]))
console.log(insertionSort([12, 3, 17, 5]))
console.log(mergeSort([12, 3, 17, 5]))
