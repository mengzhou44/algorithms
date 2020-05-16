function sort(nums) {
    if (nums.length < 2) return nums

    let mid = Math.floor(nums.length / 2)

    let left = sort(nums.slice(0, mid))
    let right = sort(nums.slice(mid))

    let merged = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex])
            leftIndex++
        } else {
            merged.push(right[rightIndex])
            rightIndex++
        }
    }

    while (leftIndex < left.length) {
        merged.push(left[leftIndex])
        leftIndex++
    }

    while (rightIndex < right.length) {
        merged.push(right[rightIndex])
        rightIndex++
    }

    return merged
}

console.log(sort([23, 12, 3, 56, 7]))
