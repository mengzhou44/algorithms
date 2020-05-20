class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        if (this.root === null) {
            this.root = new TreeNode(val)
            return
        }

        let current = this.root
        while (true) {
            if (current.val > val) {
                if (current.left === null) {
                    current.left = new TreeNode(val)
                    break
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = new TreeNode(val)
                    break
                } else {
                    current = current.right
                }
            }
        }
    }

    find(target) {
        if (this.root === null) return null

        let current = this.root

        while (current) {
            if (current.val === target) return true
            if (current.val > target) {
                if (current.left !== null) {
                    if (current.left.val === target) {
                        return true
                    }
                    current = current.left
                    continue
                }
                return false
            } else {
                if (current.right !== null) {
                    if (current.right.val === target) {
                        return true
                    }
                    current = current.right
                    continue
                }
                return false
            }
        }

        return false
    }
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(6)
tree.insert(1)
tree.insert(8)
tree.insert(12)
tree.insert(18)
tree.insert(17)

console.log(tree)

console.log(tree.find(17))

console.log(tree.find(98))
