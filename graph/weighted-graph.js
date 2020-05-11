class Node {
    constructor(label) {
        this.label = label
        this.adjacencyList = new Map()
    }
    addEdge(to, weight) {
        this.adjacencyList.set(to, new Edge(this, to, weight))
    }
    removeEdge(to) {
        this.adjacencyList.delete(to)
    }
    getEdges() {
        let edges = []
        for (let edge of this.adjacencyList.values()) {
            edges.push(edge)
        }
        return edges
    }
    toString() {
        return `${this.label}`
    }
}

class Edge {
    constructor(from, to, weight) {
        this.from = from
        this.to = to
        this.weight = weight
    }
    toString() {
        return `${this.from} -> ${this.to}`
    }
}

class WeightedGraph {
    constructor() {
        this.map = new Map()
    }

    addNode(label) {
        this.map.set(label, new Node(label))
    }

    removeNode(label) {
        let temp = this.map.get(label)
        for (let node of this.map.values()) {
            node.removeEdge(temp)
        }
        this.map.delete(label)
    }

    addEdge(from, to, weight) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
            throw new Error('Node is invalid!')
        }
        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)
        fromNode.addEdge(toNode, weight)
        toNode.addEdge(fromNode, weight)
    }

    removeEdge(from, to) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
            throw new Error('Node is invalid!')
        }
        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)
        fromNode.removeEdge(toNode)
        toNode.removeEdge(fromNode)
    }

    print() {
        for (let key of this.map.keys()) {
            const edges = this.map.get(key).getEdges().join(',')
            console.log(`Node ${key} is conneted with [${edges}]`)
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

module.exports = WeightedGraph

let graph = new WeightedGraph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addEdge('A', 'B', 2)
graph.addEdge('A', 'C', 3)

graph.print()
console.log('*******************')
graph.removeEdge('A', 'C')
graph.print()
