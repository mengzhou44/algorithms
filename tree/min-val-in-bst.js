class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function findMinValue(root) {
    if (root === null) throw new Error('root is null')
    let current = root
    let last
    while (current !== null) {
        last = current
        current = current.left
    }
    return last.val
}

let root = new TreeNode(20)
root.left = new TreeNode(10)
root.right = new TreeNode(30)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(14)
 

console.log(findMinValue(root))
