const GRID_SIZE = 8;

function placeQueens(row, columns, results) {
    if (row === GRID_SIZE) {
        results.push([...columns]);
    } else {
        for (let col = 0; col < GRID_SIZE; col++) {
            if (checkValid(columns, row, col)) {
                columns[row] = col;
                placeQueens(row + 1, columns, results);
            }
        }
    }
}

function checkValid(columns, row1, column1) {
    // Check columns and diagonals
    for (let row2 = 0; row2 < row1; row2++) {
        const column2 = columns[row2];

        if (column1 === column2) {
            return false;
        }

        // If the distance between columns and rows is the same,
        // they are in the same diagonal.

        const colDistance = Math.abs(column2 - column1);
        const rowDistance = row1 - row2;

        if (colDistance === rowDistance) {
            return false;
        }
    }

    return true;
}

const test = () => {
    const row = 0;
    const columns = new Array(8);
    const results = [];

    placeQueens(row, columns, results)

    console.log(results.length);
}

test();