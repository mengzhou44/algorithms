function quickSort(nums) {
    helper(nums, 0, nums.length - 1)
    return nums
}

function helper(nums, startIndex, endIndex) {
    if (startIndex >= endIndex) return
    let boundary = partition(nums, startIndex, endIndex)
    helper(nums, startIndex, boundary - 1)
    helper(nums, boundary + 1, endIndex)
}

function partition(nums, start, end) {
    let pivot = nums[end]
    let boundary = start - 1
    for (let i = start; i <= end; i++) {
        if (nums[i] <= pivot) {
            boundary++
            swap(nums, boundary, i)
        }
    }
    return boundary
}

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

function countSort(nums) {
    let min = Number.MAX_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER

    for (let num of nums) {
        min = Math.min(num, min)
        max = Math.max(num, max)
    }
    let temp = new Array(max - min + 1).fill(0)

    for (let num of nums) {
        temp[num - min] = temp[num - min] + 1
    }
    let result = []
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i]; j++) {
            result.push(i + min)
        }
    }

    return result
}

console.log(quickSort([12, 3, 17, 5]))
console.log(countSort([12, 3, 17, 5]))
