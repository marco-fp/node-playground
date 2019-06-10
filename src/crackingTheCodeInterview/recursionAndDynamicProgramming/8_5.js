function multiply(a, b) {
    const big = Math.max(a, b);
    const small = Math.min(a, b);
    return multiplyHelper(big, small);
}

function multiplyHelper(big, small) {
    if (small === 0) {
        return 0;
    }

    if (small === 1) {
        return big;
    }

    const halfSmall = small >> 1;
    const halfResult = multiplyHelper(big, halfSmall);

    if (small % 2 === 0) {
        return halfResult + halfResult;
    } else {
        return halfResult + halfResult + big;
    }
}

const test = () => {
    console.log(multiply(51, 10))
}

test();