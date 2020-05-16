function search(nums, target) {
   let found = -1 
    nums.forEach((item, index) => {
        if (item === target) {
            found=index
        }
    })
    return found
}


console.log(search([12,34,17,83], 83))