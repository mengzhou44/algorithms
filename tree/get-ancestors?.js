class TreeNode {
    constructor(val) {
        this.val = val 
        this.left= null 
        this.right = null
    }
}


function getAncestors(root, val) {
     let ancestors= [] 
     dfs(root,val)

     function dfs(root,val) {
          if (root === null) return
          if (root.val === val) return 

          ancestors.push(root.val)
          dfs(root.left,  val)
          dfs(root.right, val)
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

console.log(getAncestors(root, 26))