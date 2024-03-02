function smallestIsland(grid) {
    // visited logic to prevent cycles
    const visited =  new Set()
    // smallest beggins with INFINITY, because any number will be less than it
    let smallest = Infinity
    // traverse entire grid
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            // size of island found
            const size = depthFirstTraversal(grid, r, c, visited)
            if (size < smallest && size !== 0) smallest = size
        }
    }

    return smallest
}

function depthFirstTraversal(grid, r, c, visited) {
    const pos = r + "," + c
    
    if (visited.has(pos)) return 0
    visited.add(pos)

    // check if this position is available
    if (r < 0 || r >= grid.length) return 0
    if (c < 0 || c >= grid[r].length) return 0
    
    // keep it consistent with the overall return value
    if (grid[r][c] === "W") return 0
    // agregator inside recursion, starts with ONE, the smallest piece of land. Otherwise return 0
    let size = 1
    // walk through every neighbor
    size += depthFirstTraversal(grid, r - 1, c, visited)
    size += depthFirstTraversal(grid, r + 1, c, visited)
    size += depthFirstTraversal(grid, r, c - 1, visited)
    size += depthFirstTraversal(grid, r, c + 1, visited)

    return size
}

const grid = [
    ["W", "L", "W", "L", "W",],
    ["W", "L", "W", "L", "W",],
    ["L", "L", "W", "W", "W",],
    ["W", "W", "L", "W", "W",],
    ["W", "W", "W", "L", "L",],
    ["L", "W", "W", "L", "L",],
] // 1

console.log(smallestIsland(grid))
