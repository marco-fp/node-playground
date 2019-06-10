function rotateMatrix(m) {
    if (!m.length || !m[0].length) {
        return m;
    }

    // Traspose
    for (let i = 0; i < m.length; i++) {
        for (let j = i; j < m[0].length; j++) {
            const tmp = m[i][j];
            m[i][j] = m[j][i];
            m[j][i] = tmp;
        }
    }

    const mid = Math.floor(m.length / 2);

    // Reverse column order
    for ( let i = 0; i < m.length; i ++ ) {
        for ( let j = 0; j < mid; j++ ) {
            const tmp = m[i][j];
            m[i][j] = m[i][m.length - 1 - j];
            m[i][m.length - 1 - j] = tmp;
        }
    }

    return m;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function printMatrix(m) {
    m.forEach(row => console.log(row))

    console.log('\n')
}

console.log(printMatrix(rotateMatrix(matrix)))