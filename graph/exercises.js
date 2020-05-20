class Node {
    constructor(label) {
        this.label = label
        this.adjacencyList = []
    }

    addEdge(node) {
        this.adjacencyList.push(node)
    }
    removeEdge(node) {
        this.adjacencyList = this.adjacencyList.filter((item) => item !== node)
    }
}

class Graph {
    constructor() {
        this.map = new Map()
    }

    addNode(label) {
        if (!this.map.has(label)) {
            this.map.set(label, new Node(label))
        }
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
        fromNode.addEdge(toNode)
    }

    addEdge(from, to) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
            throw new Error('Node is invalid!')
        }
        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)
        fromNode.addEdge(toNode)
    }

    removeEdge(from, to) {
        if (!this.isNodeValid(from) || !this.isNodeValid(to)) {
            throw new Error('Node is invalid!')
        }
        let fromNode = this.map.get(from)
        let toNode = this.map.get(to)
        fromNode.removeEdge(toNode)
    }

    isNodeValid(label) {
        return this.map.has(label)
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

    traverseDFS(label) {
        let current = this.map.get(label)
        let visited = new Set()
        let array = []
        function dfs(node) {
            visited.add(node)
            array.push(node.label)
            for (let neighbour of node.adjacencyList) {
                if (!visited.has(neighbour)) {
                    dfs(neighbour)
                }
            }
        }
        dfs(current)
        return array
    }

    traverseDFS1(label) {
        let current = this.map.get(label)
        let visited = new Set()
        let result = []
        let array = [current]
        while (array.length > 0) {
            let node = array.shift()
            visited.add(node)
            result.push(node.label)
            for (let item of node.adjacencyList) {
                if (!visited.has(item)) {
                    array.unshift(item)
                }
            }
        }
        return result
    }

    traverseBFS(label) {
        let current = this.map.get(label)
        let visited = new Set()
        let result = []
        let array = [current]
        while (array.length > 0) {
            const node = array.shift()
            result.push(node.label)
            visited.add(node)
            for (let item of node.adjacencyList) {
                if (!visited.has(item)) {
                    array.push(item)
                }
            }
        }
        return result
    }

    topologicalSort() {
        let visited = new Set()
        let result = []
        for (let node of this.map.values()) {
            dfs(node)
        }
        function dfs(node) {
            if (visited.has(node)) return
            visited.add(node)
            for (let item of node.adjacencyList) {
                dfs(item)
            }
            result.push(node.label)
        }

        console.log(result.reverse().join(','))
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
            for (let item of node.adjacencyList) {
                if (visited.has(item)) {
                    continue
                }
                if (visiting.has(item)) {
                    return true
                }
                if (dfs(item)) {
                    return true
                }
            }
            visiting.delete(node)
            visited.add(node)
            return false
        }
    }
}

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

// console.log(graph.traverseDFS('A'))

// console.log(graph.traverseDFS1('A'))

// console.log(graph.traverseBFS('A'))

// let graph = new Graph()
// graph.addNode('X')
// graph.addNode('A')
// graph.addNode('B')
// graph.addNode('P')

// graph.addEdge('X', 'A')
// graph.addEdge('X', 'B')
// graph.addEdge('A', 'P')
// graph.addEdge('B', 'P')

// let result = graph.topologicalSort()

let graph = new Graph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

console.log(`has cycle: ${graph.hasCycle()}`)
