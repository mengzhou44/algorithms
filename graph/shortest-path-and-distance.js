const WeightedGraph = require('./weighted-graph')

let graph = new WeightedGraph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')

graph.addEdge('A', 'B', 1)
graph.addEdge('B', 'C', 2)
graph.addEdge('A', 'C', 2)

console.log(graph.getShortestPath('A','C'))

console.log(graph.getShortestDistance('A','C'))