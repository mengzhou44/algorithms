class AVLNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

    insert(val) {
        let node = new AVLNode(val)
        if (val < this.val) {
            if (this.left === null) {
                this.left = node
            } else {
                this.left.insert(val)
            }
        } else {
            if (this.right === null) {
                this.right = node
            } else {
                this.right.insert(val)
            }
        }

        this.balance(this)
    }

    balance(node) {
        if (node.isLeftHeavy()) {
            if (this.balanceFactor(node.left) < 0) {
                node.left = this.leftRotate(node.left)
            }
            this.rightRotate(node)
        } else {
            if (this.balanceFactor(this.right) > 0) {
                node.right = this.rightRotate(node.right)
            }
            this.leftRotate(node)
        }
    }

    leftRotate(root) {
        let newRoot = root.left
        root.right = newRoot.left
        newRoot.left = root
        return newRoot
    }

    rightRotate(root) {
        let newRoot = root.right
        root.left = newRoot.right
        newRoot.right = root
        return newRoot
    }

    getHeight(node) {
        if (node === null) return -1
        return (
            1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
        )
    }

    isLeftHeavy() {
        return this.balanceFactor(this) > 1
    }

    isRightHeavy() {
        return this.balanceFactor(this) < -1
    }

    balanceFactor(node) {
        if (node === null) return 0
        return this.getHeight(node.left) - this.getHeight(node.right)
    }
}

let node = new AVLNode(10)
node.insert(15)
node.insert(20)
console.log(node)
 
