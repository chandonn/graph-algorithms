/**
 * We can implement depth first with stacks
 * Stacks are implemented with arrays and recursion
 * Stacks are data structures where you ADD TO THE TOP (end) and REMOEV FROM THE TOP (end)
 * always using the top elements and functions to manipulate the top elements from the structure in use
 */

// Array version
function depthFirstGraphsArrayVersion(graph, source) {
    // adds the source at the top (end)
    // only add the KEYS to the stack, because we are using it to TRAVERSE the graph
    const stack = [source]

    while (stack.length > 0) {
        // current is one KEY from the graph
        const current = stack.pop()
        console.log(current)
        // neighbors are the relationships current has
        const neighbors = graph[current]

        for (let neighbor of neighbors) {
            // for each NEIGHBOR add their relationship to the stack
            stack.push(neighbor)
        }
    }
}

/**
 * For the recursive version, we only need to traverse every node, with a tree like approach
 * the base case is inside the graph as before, the empty array, meaning no relationship were found
 */
function depthFirstGraphsRecursionVersion(graph, source) {
    // no base case like in dynamic programming
    // we have a base case where the source has no neighbors, so it is a DEADEND
    console.log(source)
    const neighbors = graph[source]

    for (let neighbor of neighbors) {
        depthFirstRecursionVersion(graph, neighbor)
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

depthFirstGraphsArrayVersion(graph, "a")
console.log("===========================")
depthFirstGraphsRecursionVersion(graph, "a")
