/**
 * Given a set of pairs or a graph with coordinates, a start point and an end point
 * Tell if there's a way to get to the end point from the start point
 */

/**
 * This is a common case of graph implementation
 * We need to traverse the coordinates and try to get to the end
 * We will implement the DEPTH first strategy and the BREADTH first
 */

function hasPathDepthFirst(graph, source, destination) {
    if (source === destination) return true

    for (let neighbor of graph[source]) {
        if (hasPathDepthFirst(graph, neighbor, destination)) return true
    }

    return false
}

function hasPathBreadthFirst(graph, source, destination) {
    const queue = [source]

    while (queue.length > 0) {
        const current = queue.shift()

        if (current === destination) return true

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }

    return false
}

// hashmap
const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: [],
    e: ["f"],
    f: [],
}

console.log(hasPathDepthFirst(graph, "a", "f"))
console.log(hasPathBreadthFirst(graph, "a", "f"))
console.log(hasPathDepthFirst(graph, "e", "a"))
console.log(hasPathBreadthFirst(graph, "e", "a"))