function bfs(rootNode, vertices, edges){
  let queue = [];
  rootNode = vertices[0];
  
}

function findAdjacent(firstNode, vertices, edges) {
  let adjEdge = edges.filter(x => x.includes(`${firstNode}`))
  let adjArray = adjEdge.map(x => x.find(function(element) {return element != firstNode}))
  return vertices.filter(x => adjArray.includes(x.name) && x.distance === null)
}

function markDistanceAndPredecessor(vertex) {
  
}

function addToQueue(vertex) {
  
}