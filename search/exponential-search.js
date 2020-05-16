function search(nums, target) {
    if (nums.length === 0) return -1
    if (nums.length === 1) return nums[0] === target ? 0 : -1
    let bound = 1

    while (bound < nums.length && nums[bound] < target) {
        bound = bound * 2
    }
    const left = Math.floor(bound / 2)
    const right = Math.min(bound, nums.length - 1)
    return binarySearch(nums, target, left, right)
}

function binarySearch(nums, target, left, right) {
    if (left > right) return -1
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] > target) return binarySearch(nums, target, left, mid - 1)
    return binarySearch(nums, target, mid + 1, right)
}

console.log(search([1, 3, 5, 6, 7, 12], 12))
