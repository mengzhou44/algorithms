function sort(nums) {
    if (nums.length < 2) return nums
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i
        let min = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (min > nums[j]) {
                minIndex = j
                min = nums[j]
            }
        }
        let temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
    return nums
}

console.log(sort([23, 12, 3, 56, 7]))
