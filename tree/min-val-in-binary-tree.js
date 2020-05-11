class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function findMinValue(root) {
    let min = Number.MAX_SAFE_INTEGER
    function dfs(root) {
        if (root === null) return
        min = Math.min(min, root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return min
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

console.log(findMinValue(root))
