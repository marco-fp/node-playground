function permutations(str) {
    const map = new Map();
    str.split("").forEach(chr => {
        const count = map.get(chr);
        map.set(chr, count ? count + 1 : 1);
    });

    const result = [];

    getPermutations(map, "", str.length, result);

    return result;
}

function getPermutations(map, prefix, remaining, result) {
    if (remaining === 0) {
        result.push(prefix);
        return;
    }

    for (let chr of map.keys()) {
        const count = map.get(chr);
        if (count > 0) {
            map.set(chr, count - 1);
            getPermutations(map, prefix + chr, remaining - 1, result);
            map.set(chr, count);
        }
    }
}

const test = () => {
    console.log(permutations("aabc"))
}

test();