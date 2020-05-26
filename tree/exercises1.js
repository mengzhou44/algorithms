class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function insert(root, val) {
    if (root.val < val) {
        if (root.right === null) {
            root.right = new TreeNode(val)
        } else {
            insert(root.right, val)
        }
    } else {
        if (root.left === null) {
            root.left = new TreeNode(val)
        } else {
            insert(root.left, val)
        }
    }
}

function contains(root, val) {
    if (root === null) return false
    if (root.val === val) return true
    return contains(root.left) || contains(root.right)
}

function dfs_inOrder(root) {
    let array = []
    function dfs(root) {
        if (root === null) return
        dfs(root.left)
        array.push(root.val)
        dfs(root.right)
    }
    dfs(root)
    return array
}

function treeSize(root) {
    let size = 0
    function dfs(root) {
        if (root == null) return
        size++
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return size
}

function countLeaves(root) {
    let leaves = 0
    function dfs(node) {
        if (node === null) return
        if (node.left === null && node.right === null) {
            leaves++
            return
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return leaves
}

// function maxValue(root) {
//   if (root === null)   return null
//   let current = root
//   let max = current.val
//    while(current.right) {
//       current = current.right
//       max=current.val
//    }
//    return max
// }

function maxValue(root) {
    if (root === null) return null
    if (root.right === null) return root.val
    return maxValue(root.right)
}

function areSiblings(root, val1, val2) {
    if (root === null) return false
    if (root.left !== null && root.right !== null) {
        if (root.left.val === val1 && root.right.val === val2) {
            return true
        }
        if (root.left.val === val2 && root.right.val === val1) {
            return true
        }
    }
    return (
        areSiblings(root.left, val1, val2) ||
        areSiblings(root.right, val1, val2)
    )
}

// function getAncestors(root, val) {
//     let map = new Map()
//     function dfs(node, parent = null) {
//         if (node === null) return
//         if (parent !== null) {
//             map.set(node.val, parent.val)
//         } else {
//            map.set(node.val, null)
//         }
//         dfs(node.left, node)
//         dfs(node.right, node)
//     }
//     dfs(root)
//     let result = []
//     let parent = map.get(val)
//     while (map.has(parent)) {
//         result.unshift(parent)
//         parent = map.get(parent)
//     }
//     return result
// }

function getAncestors(root, val) {
    let ancestors = []
    function helper(node, path = []) {
        if (node === null) return
        if (node.val === val) {
            ancestors = path
            return
        }
       
        helper(node.left,[...path, node.val])
        helper(node.right,[...path, node.val])
    }
    helper(root)
    return ancestors
}

let root = new TreeNode(10)
insert(root, 5)
insert(root, 15)
insert(root, 6)
insert(root, 1)
insert(root, 8)
insert(root, 12)
insert(root, 18)
insert(root, 17)

console.log(root)
console.log(contains(8))

console.log(dfs_inOrder(root))
console.log(treeSize(root))
console.log(countLeaves(root))
console.log(maxValue(root))
console.log(areSiblings(root, 1, 18))

console.log(getAncestors(root, 8))
