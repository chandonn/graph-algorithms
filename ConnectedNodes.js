/**
 * Given a graph hashmap, write a function that counts the number of nodes connected to other nodes
 */
/**
 * For this problem we are presented with an undirected graph
 * Our goal is to count the node as they appear with their connections (neighbors)
 */
function connectedComponentsCount(graph) {
    const visited = new Set()
    let count = 0
    
    for (let node in graph) {
        if (depthFirstTraverse(graph, node, visited) === true) count++
    }

    return count
}

function depthFirstTraverse(graph, node, visited) {
    if (visited.has(String(node))) return false

    visited.add(String(node))

    for (let neighbor of graph[node]) {
        depthFirstTraverse(graph, neighbor, visited)
    }

    return true
}

const graph = {
    1: [0],
    2: [3, 4],
    8: [0, 5],
    5: [0, 8],
    4: [3, 2],
    3: [2, 4],
    0: [8, 1, 5],
} // 2

/**
 * The result is 2????
 * For every node, we travel to its connections, adding them to visited. When we travel to the neighbors of said node
 * if that node is connected, the travel function should return false, because visited has that node
 * the "parent" node returns true, because it's the one calling the other connected members
 * therefore, each group, headed by a node is ONE connected component
 */
console.log(connectedComponentsCount(graph))
