function findPath(maze) {
    if (!maze || !maze.length) {
        return null;
    }

    const path = [];
    const failed = new Set();

    if (getPath(maze, maze.length - 1, maze[0].length - 1, path, failed)) {
        return path;
    }

    return null;
}

function getPath(maze, row, col, path, failed) {
    if (col < 0 || row < 0 || !maze[row][col]) {
        return false;
    }

    if (failed.has({ row, col })) {
        return false;
    }

    const isAtOrigin = row === 0 && col === 0;

    if (isAtOrigin || 
        getPath(maze, row - 1, col, path, failed) ||
        getPath(maze, row, col - 1, path, failed)) {

        path.push({ col, row });
        return true;
    }

    failed.add({ row, col });
    return false;
}


const test = () => {
    const maze = [
        [true, true, true, true],
        [true, true, true, false],
        [true, true, true, false],
        [true, true, true, true],
    ];

    console.log(findPath(maze));
};

test();