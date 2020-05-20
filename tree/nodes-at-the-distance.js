class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function findNodesOfKDistances(root, k) {
  let nodes = []
  function dfs(root, distance) {
      if (root === null) return
      if (distance === 0) {
          nodes.push(root)
          return 
      }
      dfs(root.left, distance -1)
      dfs(root.right, distance -1)
  }
  dfs(root,k)
  return nodes
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


let nodes = findNodesOfKDistances(root, 3)

console.log(nodes)