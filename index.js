function bfs(rootNode, vertices, edges){
  let queue = [];
  rootNode = vertices[0];
  
}

function findAdjacent(firstNode, vertices, edges) {
  let adjEdge = edges.filter(x => x.includes(`${firstNode}`))
  let adjArray =adjEdge.map(x => x.find(function(element) {return element != firstNode}))
  return vertices.filter(x => x.name == `${firstNode}`)
}

function markDistanceAndPredecessor(vertex) {
  
}

function addToQueue(vertex) {
  
}