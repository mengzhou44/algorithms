class Node {
    constructor(val) {
        this.val = val
        this.children = new Map()
        this.isEndOfWord = false
    }

    addChild(c) {
        this.children.set(c, new Node(c))
    }

    removeChild(c) {
        this.children.delete(c)
    }

    getChildren() {
        return this.children.values()
    }

    hasChild(c) {
        return this.children.has(c)
    }

    getChild(c) {
        return this.children.get(c)
    }
}

class Trie {
    constructor() {
        this.root = new Node('')
    }

    insert(word) {
        let current = this.root
        for (let c of word) {
            if (!current.hasChild(c)) {
                current.addChild(c)
            }
            current = current.getChild(c)
        }
        current.isEndOfWord = true
    }

    remove(word) {
        if (word === null) return
        for (let c of word) {
            if (!current.hasChild(c)) {
                current.addChild(c)
            }
            current = current.getChild(c)
        }
        current.isEndOfWord = true
    }

    contains(word) {
        let current = this.root
        for (let c of word) {
            if (!current.hasChild(c)) {
                return false
            }
            current = current.getChild(c)
        }
        return current.isEndOfWord
    }

    traverse(current = this.root) {
        for (let child of current.getChildren()) {
            this.traverse(child)
        }
        console.log(current.val)
    }
}

let trie = new Trie()
trie.insert('bag')
trie.insert('bat')

console.log(trie.contains('bag'))

console.log(trie.contains('bags'))
