class Node {
    constructor(label) {
        this.label = label
        this.adjacencyList = []
    }
}

class Graph {
    constructor() {
        this.map = new Map()
    }

    addNode(label) {
        this.map.set(label, new Node(label))
    }

    removeNode(label) {
        this.map.delete(label)
        for (let node of this.map.values()) {
            node.adjacencyList = node.adjacencyList.filter(
                (node) => node.label !== label
            )
        }
    }

    addEdge(from, to) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
            throw new Error('Node is invalid!')
        }
        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)
        fromNode.adjacencyList.push(toNode)
    }

    removeEdge(from, to) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
            throw new Error('Node is invalid!')
        }
        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)
        fromNode.adjacencyList = fromNode.adjacencyList.filter(
            (node) => node != toNode
        )
    }

    print() {
        for (let key of this.map.keys()) {
            let neighbours = this.map
                .get(key)
                .adjacencyList.map((item) => item.label)
                .join(',')
            console.log(`Node ${key} is conneted with [${neighbours}]`)
        }
    }

    isNodeValid(label) {
        return this.map.has(label)
    }

    traverseDFS(label) {
        let node = this.map.get(label)
        if (node === undefined) return
        function dfs(node, set = new Set()) {
            console.log(node.label)
            set.add(node)
            for (let item of node.adjacencyList) {
                if (!set.has(item)) {
                    dfs(item, set)
                }
            }
        }
        dfs(node)
    }

    traverseDFS1(label) {
        let node = this.map.get(label)
        if (node === undefined) return
        let stack = [node]
        let visited = new Set()
        while (stack.length > 0) {
            let temp = stack.pop()
            if (visited.has(temp)) continue
            console.log(temp.label)
            visited.add(temp)
            for (let item of temp.adjacencyList) {
                if (!visited.has(item)) {
                    stack.push(item)
                }
            }
        }
    }

    traverseBFS(label) {
        let node = this.map.get(label)
        if (node === undefined) return
        let array = [node]
        let visited = new Set()
        while (array.length > 0) {
            let temp = array.shift()
            console.log(temp.label)
            visited.add(temp)
            for (let item of temp.adjacencyList) {
                if (!visited.has(item)) {
                    array.push(item)
                }
            }
        }
    }

    topologicalSort() {
        let visited = new Set()
        let stack = []
        for (let node of this.map.values()) {
            dfs(node)
        }
        function dfs(node) {
            if (visited.has(node)) return
            visited.add(node)
            for (let item of node.adjacencyList) {
                dfs(item)
            }
            stack.push(node.label)
        }
        return `[${stack.reverse().join(',')}]`
    }

    hasCycle() {
        let visiting = new Set()
        let visited = new Set()
        for (let node of this.map.values()) {
            if (dfs(node)) return true
        }
        return false

        function dfs(node) {
            visiting.add(node)
            for (let neighbour of node.adjacencyList) {
                if (visited.has(neighbour)) {
                    continue
                }
                if (visiting.has(neighbour)) {
                    return true
                }
                if (dfs(neighbour)) {
                    return true
                }
            }

            visiting.delete(node)
            visited.add(node)
            return false
        }
    }
}

module.exports = Graph

// let graph = new Graph()
// graph.addNode('A')
// graph.addNode('B')
// graph.addNode('C')
// graph.addNode('D')
// graph.addNode('E')
// graph.addEdge('A', 'B')
// graph.addEdge('B', 'D')
// graph.addEdge('D', 'C')
// graph.addEdge('A', 'C')
// graph.addEdge('C', 'E')

// graph.print()

// graph.traverseDFS('A')

// console.log('*********************')

// graph.traverseDFS1('A')
// console.log('*********************')
// graph.traverseBFS('A')
