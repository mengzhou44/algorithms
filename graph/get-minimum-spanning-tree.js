const WeightedGraph = require('./weighted-graph')

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
console.log(tree.print())
