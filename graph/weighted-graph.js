const PriorityQueue = require('./priority-queue')

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

class NodeEntry {
    constructor(node, priority) {
        this.node = node
        this.priority = priority
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

    size() {
        return this.map.size
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
        if (this.size() === 0) return '[]'
        for (let key of this.map.keys()) {
            const edges = this.map.get(key).getEdges().join(',')
            console.log(`Node ${key} is conneted with [${edges}]`)
        }
    }
    isNodeValid(label) {
        return this.map.has(label)
    }

    getShortestDistance(from, to) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
            throw 'invalid node'
        }

        let fromNode = this.map.get(from)
        let distances = new Map()
        for (let node of this.map.values()) {
            distances.set(node, Number.MAX_SAFE_INTEGER)
        }
        distances.set(fromNode, 0)

        let visited = new Set()
        let queue = new PriorityQueue((a, b) => a.priority > b.priority)
        queue.enqueue(new NodeEntry(fromNode, 0))

        while (!queue.isEmpty()) {
            let current = queue.dequeue().node
            visited.add(current)
            for (let edge of current.getEdges()) {
                if (visited.has(edge.to)) {
                    continue
                }
                let newDistance = distances.get(current) + edge.weight

                if (newDistance < distances.get(edge.to)) {
                    distances.set(edge.to, newDistance)
                    queue.enqueue(new NodeEntry(edge.to, newDistance))
                }
            }
        }
        return distances.get(this.map.get(to))
    }

    getShortestPath(from, to) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
            throw 'invalid node'
        }
        let fromNode = this.map.get(from)
        let distances = new Map()
        let previousNodes = new Map()
        for (let node of this.map.values()) {
            distances.set(node, Number.MAX_SAFE_INTEGER)
        }
        distances.set(fromNode, 0)

        let visited = new Set()

        let queue = new PriorityQueue((a, b) => {
            return a.priority > b.priority
        })

        queue.enqueue(new NodeEntry(fromNode, 0))

        while (!queue.isEmpty()) {
            let current = queue.dequeue().node
            visited.add(current)
            for (let edge of current.getEdges()) {
                if (visited.has(edge.to)) {
                    continue
                }
                let newDistance = distances.get(current) + edge.weight
                if (newDistance < distances.get(edge.to)) {
                    distances.set(edge.to, newDistance)
                    queue.enqueue(new NodeEntry(edge.to, newDistance))
                    previousNodes.set(edge.to.label, current.label)
                }
            }
        }

        let path = []
        path.unshift(to)
        let current = previousNodes.get(to)
        while (current !== undefined) {
            path.unshift(current)
            current = previousNodes.get(current)
        }

        return path
    }

    hasCycle() {
        let visited = new Set()
        for (let node of this.map.values()) {
            if (visited.has(node)) continue
            if (helper(node, null)) {
                return true
            }
        }
        return false

        function helper(node, parent = null) {
            visited.add(node)
            for (let edge of node.getEdges()) {
                if (edge.to === parent) continue
                if (visited.has(edge.to)) return true
                if (helper(edge.to, node)) return true
            }
            return false
        }
    }

    getMinimumSpanningTree() {
        let tree = new WeightedGraph()
        if (this.size() === 0) return tree

        let queue = new PriorityQueue((a, b) => a.weight > b.weight)
        let nextNode = this.map.values().next().value

        queue.addAll(nextNode.getEdges())
        if (queue.isEmpty()) return tree

        tree.addNode(nextNode.label)

        while (tree.size() < this.size()) {
            let edge = queue.dequeue()

            nextNode = edge.to
            if (tree.containsNode(nextNode.label)) {
                continue
            }
            tree.addNode(nextNode.label)
            tree.addEdge(edge.from.label, edge.to.label, edge.weight)
            queue.addAll(nextNode.getEdges())
        }
        return tree
    }

    containsNode(label) {
        return this.map.has(label)
    }
}

module.exports = WeightedGraph

// let graph = new WeightedGraph()
// graph.addNode('A')
// graph.addNode('B')
// graph.addNode('C')
// graph.addEdge('A', 'B', 2)
// graph.addEdge('A', 'C', 3)

// graph.print()
// console.log('*******************')
// graph.removeEdge('A', 'C')
// graph.print()
