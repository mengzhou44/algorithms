class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function findHeight(root) {
    if (root === null) return -1
    if (root.left === null && root.right === null) return 0
    return 1 + Math.max(findHeight(root.left), findHeight(root.right))
}

let root = new TreeNode(20)
root.left = new TreeNode(10)
root.right = new TreeNode(30)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(21)
root.left.left.left = new TreeNode(3)
root.left.left.right = new TreeNode(8)

root.right.left = new TreeNode(4)

console.log(findHeight(root))
