function sort(nums) {
    if (nums.length < 2) return nums

    let max = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])
        min = Math.min(min, nums[i])
    }

    let array = new Array(max - min + 1).fill(0)
    for (let num of nums) {
        array[num - min] = array[num - min] + 1
    }

    let result = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i]; j++) {
            result.push(i + min)
        }
    }
    return result
}

console.log(sort([]))
