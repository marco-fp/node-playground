const { BinaryTreeNode } = require('./node')

function minTree(values) {
    return buildMinTree(values, 0, values.length - 1);
}

function buildMinTree(values, start, end) {
    if (end < start) {
        return null;
    }

    const mid = Math.floor((start + end) / 2);

    const node = new BinaryTreeNode(values[mid]);

    node.left = buildMinTree(values, start, mid - 1);
    node.right = buildMinTree(values, mid + 1, end);

    return node;
}
