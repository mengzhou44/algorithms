class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function size(root) {
    if (root === null) return 0

    return 1 + size(root.left) + size(root.right)
}

function countLeaves(root) {
    let count = 0
    dfs(root)

    function dfs(root) {
        if (root === null) return

        if (root.left === null && root.right === null) {
            count++
        }
        dfs(root.left)
        dfs(root.right)
    }
    return count
}

function contains(root, val) {
    if (root === null) return false
    if (root.val === val) return true
    return contains(root.left, val) || contains(root.right, val)
}

function areSibling(root, value1, value2) {
    if (root === null) return false
    if (root.left === null || root.right === null) return false
     
    if (root.left.val === value1 && root.right.val === value2) return true
    if (root.left.val === value2 && root.right.val === value1) return true

    return (
        areSibling(root.left, value1, value2) ||
        areSibling(root.right, value1, value2)
    )
}

let root = new TreeNode(20)
root.left = new TreeNode(10)
root.right = new TreeNode(30)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(14)
root.left.left.left = new TreeNode(3)
root.left.left.right = new TreeNode(8)

root.right.left = new TreeNode(24)
root.right.left.right = new TreeNode(26)

console.log(size(root))

console.log(countLeaves(root))

console.log(contains(root, 8))

console.log(areSibling(root,3,8))
console.log(areSibling(root,3,14))
