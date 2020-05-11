class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

    insert(val) {
        let nodeToInsert = new TreeNode(val)
        let current = this
        while (true) {
            if (current.val > val) {
                if (current.left === null) {
                    current.left = nodeToInsert
                    break
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = nodeToInsert
                    break
                } else {
                    current = current.right
                }
            }
        }
    }

    find(val) {
        if (this.val === val) {
            return this
        }
        if (this.val > val && this.left !== null) {
            return this.left.find(val)
        }

        if (this.val < val && this.right !== null) {
            return this.right.find(val)
        }
        return null
    }
}

let root = new TreeNode(10)
root.insert(5)
root.insert(15)
root.insert(6)
root.insert(1)
root.insert(8)
root.insert(12)
root.insert(18)
root.insert(17)

let node = root.find(17)
console.log(node)
console.log(root)
