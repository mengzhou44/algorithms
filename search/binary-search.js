function search(nums, target) {
    nums = nums.sort((a, b) => a - b)
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (target === nums[mid]) {
            return mid
        } else if (target > nums[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

// recrusively
function search1(nums, target) {
    
    nums = nums.sort((a, b) => a - b)
    
    return helper(target, 0, nums.length - 1)

    function helper(target, left, right) {
        if (left > right) return -1
        let mid = Math.floor((left + right) / 2)
        if (target === nums[mid]) 
            return mid
         
        if (target < nums[mid]) 
           return helper(target, left, mid-1 )
        
        return helper(target, mid+1, right)
    }
}

console.log(search1([12, 34, 17, 83], 83))
