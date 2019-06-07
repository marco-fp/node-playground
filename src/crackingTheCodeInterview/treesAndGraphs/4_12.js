function pathWithSum(root, n) {
    return countPathsWithSum(root, n, []);
}

function countPathsWithSum(node, n, sums) {
    let count = 0;

    const newSums = sums.map(s => s + node.data);
    newSums.push(node.data);

    newSums.forEach(s => {
        if (s === n) {
            count++;
        }
    })

    return countPathsWithSum(node.left, n, newSums) +
        countPathsWithSum(node.right, n, newSums) +
        count;
}
