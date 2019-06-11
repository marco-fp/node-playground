function permutations(str, idx = 0, perms = [""]) {
    if (idx < str.length) {
        const newPerms = [];

        for (let i = 0; i < perms.length; i++) {
            const perm = perms[i];

            for (let j = 0; j <= perm.length; j++) {
                const newPerm = perm.slice(0, j) + str[idx] + perm.slice(j, perm.length);
                newPerms.push(newPerm);
            }
        }

        return permutations(str, idx + 1, newPerms);
    }

    return perms;
}

const test = () => {
    console.log(permutations('abc'))
}

test();