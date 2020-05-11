class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function equals(root1, root2) {
    if (root1 === null && root2 === null) return true

    if (root1.val !== root2.val) return false

    return equals(root1.left, root2.left) && equals(root1.right, root2.right)
}
