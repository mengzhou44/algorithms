function search(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}

function search1(nums, target) {
    let left = 0
    let right = nums.length - 1

    function help(target, left, right) {
        if (left > right) return -1
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) {
            return help(target, left, mid - 1)
        }
        return help(target, mid + 1, right)
    }
    return help(target, left, right)
}

console.log(search([6, 23, 45, 47], 47))
console.log(search1([6, 23, 45, 47], 47))
