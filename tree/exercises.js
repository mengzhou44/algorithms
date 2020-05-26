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

function findMin(root) {
    let current = root
    while (current.left !== null) {
        current = current.left
    }
    return current.val
}

function findMinInBinaryTree(root) {
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

function equals(root1, root2) {
    if (root1 === null && root2 === null) return true
    if (root1.val1 !== root2.val) return false
    return equals(root1.left, root2.left) && equals(root1.right, root2.right)
}

function validBST(root, min = null, max = null) {
    if (root === null) return true
    if (min !== null && root.val < min) return false
    if (max !== null && root.val > max) return false

    return (
        validBST(root.left, min, root.val) &&
        validBST(root.right, root.val, max)
    )
}

function findNodesWithDistances(root, k) {
    let result = []

    function helper(node, k) {
        if (node === null) return
        if (k === 0) {
            result.push(node.val)
            return
        }
        helper(node.left, k - 1)
        helper(node.right, k - 1)
    }

    helper(root, k)
    return result
}

function findSize(root) {
    let count = 0
    function dfs(root) {
        if (root === null) return
        count++
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return count
}

function countLeaves(root) {
    if (root === null) return 0
    if (root.left === null && root.right === null) return 1

    return countLeaves(root.left) + countLeaves(root.right)
}

function findMax(root) {
    if (root === null) return null

    let current = root
    while (current) {
        if (current.right === null) {
            return current.val
        }
        current = current.right
    }
}

function contains(root, target) {
    if (root === null) return false
    if (root.val === target) return true

    return contains(root.left, target) || contains(root.right, target)
}

function areSiblings(root, val1, val2) {
    if (root === null) return false
    if (root.left === null || root.right === null) return false
    if (root.left.val === val1 && root.right.val === val2) return true
    if (root.left.val === val2 && root.right.val === val1) return true

    return (
        areSiblings(root.left, val1, val2) ||
        areSiblings(root.right, val1, val2)
    )
}

function getAncestors(root, val) {
    let node
    function dfs(root) {
        if (root === null) return
        if (root.left !== null) {
            root.left.parent = root
        }
        if (root.right !== null) {
            root.right.parent = root
        }
        if (root.val === val) {
            node = root
        }

        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    let ancestors = []
    while (node.parent) {
        ancestors.push(node.parent.val)
        node = node.parent
    }
    return ancestors
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

console.log(findMinInBinaryTree(root))
console.log(validBST(root))
console.log(findNodesWithDistances(root, 2))
console.log(findSize(root))
console.log(countLeaves(root))
console.log(findMax(root))

console.log(contains(root, 13))
console.log(areSiblings(root, 3, 8))
console.log(getAncestors(root, 3))
