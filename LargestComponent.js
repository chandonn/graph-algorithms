/**
 * Given a graph, find the largest group of nodes 
 */
/**
 * As seen previously, we need to traverse the nodes marking them as visited
 * each traversal marks a new group, so the base case should be 1 for every node within that group
 */

function largestComponent(graph) {
    const visited = new Set()
    let largest = 0

    for (let node in graph) {
        const response = depthFirstTraverse(graph, Number(node), visited)
        if (response > largest) largest = response
    }

    return largest
}

function depthFirstTraverse(graph, node, visited) {
    if (visited.has(node)) return 0
    visited.add(node)
    // size of ONE component (the header, first of line), needs to start as 1
    let size = 1
    for (let neighbor of graph[node]) {
        size += depthFirstTraverse(graph, Number(neighbor), visited)
    }

    return size
}

const graph = {
    1: [0],
    2: [3, 4],
    8: [0, 5],
    5: [0, 8],
    4: [3, 2],
    3: [2, 4],
    0: [8, 1, 5],
} // 4

/**
 * 
 */
console.log(largestComponent(graph))
