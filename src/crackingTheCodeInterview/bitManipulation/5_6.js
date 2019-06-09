function bitDifferenceCount(a, b) {
    let count = 0;

    for( let i = a ^ b; i !== 0; i = i >>> 1) {
        count += i & 1;
    }

    return count;
}

const test = () => {
    console.log(bitDifferenceCount(4, 9))
}

test();