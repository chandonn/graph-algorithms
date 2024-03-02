/**
 * Given a set of edges, undirected graph, tell the mallest path from start to end
 * For graphs we have two options, breadth and depth first traversal. This cases we can use a optimized algorithm
 * depth first will try every node of each direction before changing to other direction
 * breadth first will look every neighbor before changing, making it more performant, because we do not need to traverse the whole graph 
 * we return when the target node is found
 */

function smallestPath(edges, start, finish) {
    const graph = buildGraph(edges)
    const queue = [[start, 0]]
    const visited = new Set([start])
    let response = []

    while (queue.length > 0) {
        const [current, distance] = queue.shift()
        
        for (let neighbor of graph[current]) {
    
            if (!visited.has(neighbor)) {

                queue.push([neighbor, distance + 1])
                visited.add(neighbor)
                
                if (neighbor === finish) {
                    return [neighbor, distance + 1]
                }
            }
        }
    }

    return [finish, -1]
}

// build graph from edges
function buildGraph(edges) {
    const graph = {}

    for (let pair of edges) {
        const [a, b] = pair

        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []

        graph[a] = [...graph[a], b]
        graph[b] = [...graph[b], a]
    }

    return graph
}

const edges = [
    ["w", "x"],
    ["x", "y"],
    ["z", "y"],
    ["w", "v"],
    ["u", "v"],
    ["u", "z"],
]

console.log(smallestPath(edges, "x", "w"))