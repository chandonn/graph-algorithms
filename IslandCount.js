/**
 * Given a grid, 2d array, with W and L values. Tell the number of islands inside the grid
 * Islands are connected pieces of land, or Ls in the grid
 */
/**
 * We can vizualize the grid as a graph, where each piece is a node and the neighbors are the pieces on its side
 * if you are at node (3, 4), row 3 and column 4, the neighbors are (2, 4) (3, 5) (4, 4) (3, 3)
 * so we need to traverse the grid adn start a depth first walk for every island found
 * marking the pieces as visited
 */

function islandCount(grid) {
    // to hold our visited pieces
    const visited = new Set()
    let count = 0
    // walk through every piece
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            // starts traversal
            // we found land! add to count
            if (traverseGrid(grid, r, c, visited) === true) count++
        }
    }

    return count
}

// depth first with recursion
function traverseGrid(grid, r, c, visited) {
    // creating the visited key
    const pos = r + "," + c
    // visited!
    if (visited.has(pos)) return false
    visited.add(pos)
    // prevent going off bounds in the grid
    if (r < 0 || r >= grid.length) return false
    if (c < 0 || c >= grid[r].length) return false
    // if it's not a LAND
    if (grid[r][c] === "W") return false

    // recursively call every side nodes of current node
    traverseGrid(grid, r - 1, c, visited)
    traverseGrid(grid, r + 1, c, visited)
    traverseGrid(grid, r, c - 1, visited)
    traverseGrid(grid, r, c + 1, visited)

    // inbound LAND
    return true
}

const grid = [
    ["W", "L", "W", "L", "W",],
    ["W", "L", "W", "L", "W",],
    ["L", "L", "W", "W", "W",],
    ["W", "W", "L", "W", "W",],
    ["W", "W", "W", "L", "L",],
    ["L", "W", "W", "L", "L",],
] // 5

console.log(islandCount(grid))