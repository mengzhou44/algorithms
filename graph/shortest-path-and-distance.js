const WeightedGraph = require('./weighted-graph')

let graph = new WeightedGraph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')

graph.addEdge('A', 'B', 3)
graph.addEdge('A', 'D', 2)
graph.addEdge('A', 'C', 4)
graph.addEdge('C', 'D', 1)
graph.addEdge('B', 'D', 6)
graph.addEdge('D', 'E', 5)
graph.addEdge('B', 'E', 1)

console.log(graph.getShortestPath('A','E'))

 