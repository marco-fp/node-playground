function powerSet(values) {
    const sets = [[]];

    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        const countSets = sets.length;

        for (let j = 0; j < countSets; j++) {
            const newSet = [...sets[j], value];
            sets.push(newSet);
        }
    }

    return sets;
}

const test = () => {
    const values = [1, 2, 3, 4];
    const ps = powerSet(values);
    console.log(ps, ps.length)
}

test();