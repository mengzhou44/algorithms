//const Graph = require('./graph')
const WeightedGraph = require('./weighted-graph')

// let graph = new Graph()

// graph.addNode('A')
// graph.addNode('B')
// graph.addNode('C')
// graph.addEdge('A', 'B')
// graph.addEdge('B', 'C')
// graph.addEdge('C', 'A')

//console.log(`has cycle: ${graph.hasCycle()}`)


let graph1 = new WeightedGraph()

graph1.addNode('A')
graph1.addNode('B')
graph1.addNode('C')
graph1.addEdge('A', 'B')
graph1.addEdge('B', 'C')
 

console.log(`has cycle: ${graph1.hasCycle()}`)
