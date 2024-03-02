/**
 * Breadth First algorithms are implemented with QUEUES
 * we can only create queues with iteration
 * if we try to use recursion, in the back we will be using a stack implementation, which is a counter pattern
 * In QUEUES we remove from the init (0) and add to the end (LENGTH)
 * to implement that, we will use arrays, shift, push
 */

function breadthFirstGraphs(graph, source) {
    const queue = [source]
    while (queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        const neighbors = graph[current]

        for (let neighbor of neighbors) {
            queue.push(neighbor)
        }
    }
}

// hashmap
const graph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
}

breadthFirstGraphs(graph, "a")