function sort(nums) {
    helper(nums, 0, nums.length - 1)
    return nums 
}

function helper(nums, startIndex,endIndex) {
    if (startIndex >= endIndex) return
    let boundary = partition(nums, startIndex, endIndex)
    helper(nums, startIndex, boundary - 1)
    helper(nums, boundary + 1, endIndex)
}

function partition(nums, startIndex, endIndex) {
    let pivot = nums[endIndex]
    let boundary = startIndex - 1
    for (let i = startIndex; i <= endIndex; i++) {
        if (nums[i] <= pivot) {
            boundary++
            swap(i, boundary, nums)
        }
    }
    return boundary
}

function swap(i, j, nums) {
    if (i === j) return
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

console.log(sort([3, 12, 35, 13, 27, 89, 14]))
