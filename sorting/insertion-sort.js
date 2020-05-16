function sort(nums) {
    if (nums.length < 2) return nums

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j]
            j = j - 1
        }
        nums[j + 1] = current
    }
    return nums
}

console.log(sort([23, 12, 3, 56, 7]))
