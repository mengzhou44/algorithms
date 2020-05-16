function search(nums, target) {
    nums = nums.sort((a, b) => a - b)

    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        console.log(left, right)
        let mid1 = Math.floor(left + (right - left) / 3)
        let mid2 = Math.floor(right - (right - left) / 3)

        if (target === nums[mid1]) {
            return mid1
        }
        if (target === nums[mid2]) {
            return mid2
        }
        if (target < nums[mid1]) {
            right = mid1 - 1
        } else if (target < nums[mid2]) {
            right = mid2 - 1
            left = mid1 + 1
        } else {
            left = mid2 + 1
        }
    }
    return -1
}

console.log(search([12, 34, 17, 83], 84))
