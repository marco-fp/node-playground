function oneWay(a, b) {
    if (a.length === b.length) {
        let foundMissmatch = false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                if (foundMissmatch) {
                    return false;
                }
                foundMissmatch = true;
            }
        }
        return true;
    } else {
        let idxA = 0;
        let idxB = 0;
        let foundMissmatch = false;

        while (idxA < a.length && idxB < b.length) {
            if (a[idxA] !== b[idxB]) {
                if (foundMissmatch) {
                    return false;
                }

                foundMissmatch = true;

                if (a.length < b.length) {
                    idxB++;
                } else {
                    idxA++;
                }

            } else {
                idxA++;
                idxB++;
            }
        }

        if (foundMissmatch && (a.length !== idxA || b.length !== idxB)) {
            return false;
        }

        return true;
    }
}

console.log(oneWay('pale', 'ple')) // true

console.log(oneWay('pales', 'pale')) // true

console.log(oneWay('pale', 'bale')) // true

console.log(oneWay('pale', 'bake')) // false