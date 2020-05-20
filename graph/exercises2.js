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
            edges.push(adge)
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
}
