function flipToWin(n) {
    if (n === 0) {
        return 1;
    }

    let a = n;
    let max = 0;
    let total = 0;
    let sequence = 0;

    while (a > 0) {
        if ((a & 1) === 1) {
            total += 1;
            sequence += 1;
        } else if ((a & 1) === 0) {
            max = Math.max(total, max);
            total = sequence + 1;
            sequence = 0;
        }

        a = a >>> 1;
    }

    return max;
}


const test = () => {
    console.log(flipToWin(1775))
}

test();