const Graph = require('./graph')

let graph = new Graph()

graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('C', 'A')

console.log(`has cycle: ${graph.hasCycle()}`)
