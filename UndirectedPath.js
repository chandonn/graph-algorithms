/**
 * Given an array with the edges representing coodinates, two points per time
 * and start and destination points
 * Tell if it is possible to get from point A to point B
 */
/**
 * When dealing with UNDIRECTED GRAPHs, we will have points with two way relationships
 * we need to first transform that into an adjacent list, with clear directions
 * before we move into depth or breadth first algorithms
 */
function undirectedGraph(edges, start, end) {
    const graph = createGraph(edges)
    return depthFirstUndirectedGraph(graph, start, end)
}

function depthFirstUndirectedGraph(graph, source, destination, visited = new Set()) {
    if (visited.has(source)) return false
    if (source === destination) return true

    visited.add(source)
    for (let neighbor of graph[source]) {
        if (depthFirstUndirectedGraph(graph, neighbor, destination, visited)) return true
    }

    return false
}

function breadthFirstUdirectedGraph(graph, source, destination) {
    const queue = [source]
    const visited = new Set()

    while (queue.length > 0) {
        const current = queue.shift()
        for (let neighbor of graph[current]) {
            if (neighbor === destination) return true

            if (!visited.has(neighbor)) {
                queue.push(neighbor)
                visited.add(neighbor)
            }
        }
    }

    return false
}

function createGraph(edges) {
    const graph = {}

    for (let edge of edges) {
        // in this case, we only have two points per pair
        const [a, b] = edge

        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
]

console.log(undirectedGraph(edges, "j", "o"))
