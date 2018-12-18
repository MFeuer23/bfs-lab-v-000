function bfs(rootNode, vertices, edges){
    //   rootNode = vertices[0]
    // queue = []
    // addVertexToQueue(rootNode)
    //     // queue = [rootNode]
    // while(!queue.length == 0) {
    //     let firstNode = queue.shift()
    // adjacentVertices = findAdjacent(firstNode)
    //     for vertex in adjacentVertices {
    //         markDistanceAndPredecessor(vertex)
    //         addToQueue(vertex)
    //     }
    // }
}

function findAdjacent(firstNode, vertices, edges) {
  let adjEdge = edges.filter(x => x.includes(`${firstNode}`))
  let adjArray = adjEdge.map(x => x.find(function(element) {return element != firstNode}))
  return vertices.filter(x => adjArray.includes(x.name) && x.distance === null)
}

function markDistanceAndPredecessor(predecessor, adjNodes) {
  return adjNodes.map(function(node) {
    node.predecessor = predecessor;
    node.distance = predecessor.distance + 1
  })
}

function addToQueue(vertex) {
  
}