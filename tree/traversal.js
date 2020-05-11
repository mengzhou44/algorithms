class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function preorder_dfs(root, visited = []) {
    if (root === null) return
    visited.push(root.val)
    preorder_dfs(root.left, visited)
    preorder_dfs(root.right, visited)
}

function inorder_dfs(root, visited = []) {
    if (root === null) return
    inorder_dfs(root.left, visited)
    visited.push(root.val)
    inorder_dfs(root.right, visited)
}

function postorder_dfs(root, visited = []) {
    if (root === null) return
    postorder_dfs(root.left, visited)
    postorder_dfs(root.right, visited)
    visited.push(root.val)
}

function bfs(root, visited = []) {
    let array = [root]
    while (array.length > 0) {
        let node = array.shift()
        visited.push(node.val)
        if (node.left !== null) {
            array.push(node.left)
        }
        if (node.right !== null) {
            array.push(node.right)
        }
    }
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

// let visited = []
// preorder_dfs(root, visited)
// console.log(visited)

// let visited = []
// postorder_dfs(root, visited)
// console.log(visited)

// let visited = []
// inorder_dfs(root, visited)
// console.log(visited)

let visited = []
bfs(root, visited)
console.log(visited)
