class Node {
    constructor(val) {
        this.val = val
        this.children = new Map()
        this.isEndOfWord = false
    }
    hasChild(c) {
        return this.children.has(c)
    }

    addChild(c) {
        this.children.set(c, new Node(c))
    }

    getChild(c) {
        return this.children.get(c)
    }

    getChildren() {
        return this.children.values()
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
        let current = this.root
        for (let c of word) {
            if (!current.hasChild(c)) {
                return
            }
            current = current.getChild(c)
        }

        current.isEndOfWord = false
    }

    contains(word) {
        if (word === null) return false
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

    findWords(prefix) {
        let current = this.root
        for (let c of prefix) {
            current = current.getChild(c)
            if (current === undefined) {
                return []
            }
        }

        let words = []
        function dfs(node, path = prefix) {
            if (node.isEndOfWord) {
                words.push(path)
            }
            for (let child of node.getChildren()) {
                dfs(child, path + child.val)
            }
        }

        dfs(current)

        return words
    }
}

let trie = new Trie()
trie.insert('car')
trie.insert('care')
trie.insert('careful')
trie.insert('card')

// console.log(trie.contains('ght'))
// console.log(trie.contains('cat'))

console.log(trie.findWords('care'))
console.log(trie.findWords('cargo'))
