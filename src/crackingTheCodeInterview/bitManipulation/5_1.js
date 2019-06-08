function insertion(n, m, i, j) {
    const allOnes = 0b11111111111;
    const left = allOnes << (j + 1);
    const right = ((1 << i) - 1);
    const mask = left | right;

    const cleared = n & mask;
    const shifted = m << i;

    return cleared | shifted;
}

const test = () => {
    const n = 0b10000000000;
    const m = 0b10011;
    const i = 2;
    const j = 6;

    const inserted = insertion(n, m, i, j);
    console.log(inserted.toString(2))
}

test();