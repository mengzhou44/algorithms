class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function isValid(root, min = null, max = null) {
    if (root === null) return true

    if (min !== null) {
        if (root.val < min) return false
    }
    if (max !== null) {
        if (root.val > max) return false
    }

    return (
        isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
    )
}
