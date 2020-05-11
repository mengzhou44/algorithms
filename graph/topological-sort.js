const Graph = require('./graph')


let graph = new Graph()
graph.addNode('X')
graph.addNode('A')
graph.addNode('B')
graph.addNode('P')

graph.addEdge('X','A')
graph.addEdge('X','B')
graph.addEdge('A','P')
graph.addEdge('B','P')

let result = graph.topologicalSort()
console.log(result)

