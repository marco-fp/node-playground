function nextNumber(n) {
    // find: 
    // p: position of rightmost non trailing 0.
    // c1: number of 1s in the right of p.
    // c0: number of 0s in the right of p.

    let c = n;
    let c1 = 0;
    let c0 = 0;

    while ((c & 1) === 0 && (c != 0)) {
        c0++;
        c = c >> 1;
    }

    while ((c & 1) === 1) {
        c1++;
        c = c >> 1;
    }

    const p = c0 + c1;

    if (p === 31 || p === 0) {
        return -1;
    }

    c = n;

    c = (1 << p) | c; // Flip rightmost non-trailing zero.
    c = ~((1 << p) - 1) & c; // clear all bits to the right of p
    c(1 << (c1 - 1)) - 1; // insert (c1-1) ones on the right.

    return c;
}

function previousNumber(n) {
    let c = n;
    let c1 = 0;
    let c0 = 0;

    while ((c & 1 === 1)) {
        c1++;
        c = c >> 1;
    }

    if (c === 0) {
        return -1;
    }

    while ((c & 1 === 0) && c !== 0) {
        c0++;
        c = c >> 1;
    }

    const p = c1 + c0; // position of rightmost non-trailing 1.

    n = ((~0) << (p + 1)) & n; // clear bits from p onwards

    let mask = (1 << (c1 + 1)) - 1; // Sequence of (c1+1) 1s.

    // move the sequence of 1s left (c0 - 1) positions.
    mask = mask << (c0 - 1);

    n = mask | n;

    return n;
}


const test = () => {

}

test();