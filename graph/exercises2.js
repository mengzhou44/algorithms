const PriorityQueue = require('./priority-queue')

class Node {
    constructor(label) {
        this.label = label
        this.adjacencyList = new Map()
    }
    addEdge(to, weight) {
        this.adjacencyList.set(to.label, new Edge(this, to, weight))
    }
    removeEdge(to) {
        this.adjacencyList.delete(to.label)
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

class NodeEntry {
    constructor(node, priority) {
        this.node = node
        this.priority = priority
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
        let item = this.map.get(label)
        if (item === undefined) return
        for (let node of this.map.values()) {
            node.removeEdge(item)
        }
        this.map.delete(label)
    }

    print() {
        if (this.size() === 0) {
            console.log('[]')
        }
        for (let node of this.map.values()) {
            let edges = node.getEdges().join(', ')
            console.log(`${node.toString()} is connected to [${edges}]`)
        }
    }

    addEdge(from, to, weight) {
        if (!this.isValidNode(from) || !this.isValidNode(to)) {
            throw new Error('Invaid Node')
        }
        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)
        fromNode.addEdge(toNode, weight)
        toNode.addEdge(fromNode, weight)
    }

    removeEdge(from, to) {
        if (!this.isValidNode(from) || !this.isValidNode(to)) {
            throw new Error('Invaid Node')
        }
        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)
        fromNode.removeEdge(toNode)
        toNode.addEdge(fromNode)
    }

    isValidNode(label) {
        return this.map.has(label)
    }

    getShortestPath(from, to) {
        if (!this.isValidNode(from) || !this.isValidNode(to)) {
            throw new Error('Invaid Node')
        }
        let visited = new Set()
        let fromNode = this.map.get(from)
        let distances = new Map()
        let previousNodes = new Map()
        for (let node of this.map.values()) {
            distances.set(node, Number.MAX_SAFE_INTEGER)
        }
        distances.set(fromNode, 0)
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
                    previousNodes.set(edge.to.label, current.label)
                    queue.enqueue(new NodeEntry(edge.to, newDistance))
                }
            }
        }
        let result = [to]
        let previous = previousNodes.get(to)
        while (previous !== undefined) {
            result.unshift(previous)
            previous = previousNodes.get(previous)
        }

        return result
    }

    size() {
        return this.map.size
    }

    hasCycle() {
        let visited = new Set()
        for (let node of this.map.values()) {
            if (visited.has(node)) continue
            if (helper(node, null) === true) {
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
        let nextNode = this.map.values().next().value
        tree.addNode(nextNode.label)

        let queue = new PriorityQueue((a, b) => a.weight > b.weight)
        queue.addAll(nextNode.getEdges())

        if (queue.isEmpty()) return tree

        while (tree.size() < this.size()) {
            let edge = queue.dequeue()

            if (tree.containsNode(edge.to.label)) {
                continue
            }

            tree.addNode(edge.to.label)

            tree.addEdge(edge.from.label, edge.to.label, edge.weight)
            nextNode = edge.to
            queue.addAll(nextNode.getEdges())
        }

        return tree
    }

    containsNode(label) {
        return this.map.has(label)
    }
}

// let graph = new WeightedGraph()
// graph.addNode('A')
// graph.addNode('B')
// graph.addNode('C')
// graph.addNode('D')
// graph.addNode('E')

// graph.addEdge('A', 'B', 3)
// graph.addEdge('A', 'D', 2)
// graph.addEdge('A', 'C', 4)
// graph.addEdge('C', 'D', 1)
// graph.addEdge('B', 'D', 6)
// graph.addEdge('D', 'E', 5)
// graph.addEdge('B', 'E', 1)

// console.log(graph.getShortestPath('A', 'E'))

// let graph1 = new WeightedGraph()

// graph1.addNode('A')
// graph1.addNode('B')
// graph1.addNode('C')
// graph1.addEdge('A', 'B')
// graph1.addEdge('B', 'C')

// console.log(`has cycle: ${graph1.hasCycle()}`)

let graph = new WeightedGraph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')

graph.addEdge('A', 'B', 5)
graph.addEdge('A', 'C', 3)
graph.addEdge('C', 'D', 1)
graph.addEdge('D', 'B', 1)

let tree = graph.getMinimumSpanningTree()
tree.print()
