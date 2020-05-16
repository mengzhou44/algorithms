function search(nums, target) {
    let blockSize = Math.floor(Math.sqrt(nums.length))
    let blockEndIndex = blockSize - 1
    while (blockEndIndex <= nums.length - 1) {
        if (nums[blockEndIndex] === target) {
            return blockEndIndex
        }
        if (nums[blockEndIndex] > target) {
            return searchTarget(
                nums,
                target,
                blockEndIndex - blockSize,
                blockEndIndex
            )
        }
        blockEndIndex = blockEndIndex + blockSize
    }
     
    return searchTarget(
        nums,
        target,
        blockEndIndex - blockSize,
        nums.length - 1
    )
}

function searchTarget(nums, target, start, end) {
    for (let i = start; i <= end; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    return -1
}

console.log(search([1], 7))
