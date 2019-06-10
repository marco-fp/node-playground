function zeroMatrix(m) {
    const zeroRows = new Set();
    const zeroCols = new Set();

    const rows = m.length;
    const cols = m[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (m[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (zeroRows.has(i) || zeroCols.has(j)) {
                m[i][j] = 0;
            }
        }
    }

    return m;
}

const matrix = [
    [0, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
]

function printMatrix(m) {
    m.forEach(row => console.log(row))

    console.log('\n')
}

console.log(printMatrix(zeroMatrix(matrix)))