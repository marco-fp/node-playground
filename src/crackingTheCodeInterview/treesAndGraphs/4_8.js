const {BinaryTreeNode} = require('./node');

function firstCommonAncestor(root, a, b) {
    const result = search(root, a, b);

    return result.found ? result.node : null;
}

function search(node, a, b) {
    if (!node) {
        return { node: null, found: false };
    }

    if (node === a && node === b) {
        return { node, found: true };
    }

    if (node === a || node === b) {
        return { node, found: false };
    }

    const searchLeft = search(node.left, a, b);

    if (searchLeft.found) {
        return searchLeft;
    }

    const searchRight = search(node.right, a, b);

    if (searchRight.found) {
        return searchRight;
    }

    if (searchRight && searchLeft && (
        (searchRight.node === a && searchLeft.node === b) ||
        (searchRight.node === b && searchLeft.node === a)
    )) {
        return { node, found: true };
    }

    if (searchRight && searchRight.node) {
        return searchRight;
    } else {
        return searchLeft;
    }
}

const test = () => {
    const node20 = new BinaryTreeNode(20);
    const node10 = new BinaryTreeNode(10);
    const node15 = new BinaryTreeNode(15);
    const node17 = new BinaryTreeNode(17);
    const node5 = new BinaryTreeNode(5);
    const node7 = new BinaryTreeNode(7);
    const node3 = new BinaryTreeNode(3);
    
    const node30 = new BinaryTreeNode(30);
    
    node20.left = node10;
    node20.right = node30;

    node10.left = node5;
    node10.right = node15;

    node5.left = node3;
    node5.right = node7;

    node15.right = node17;

    console.log(firstCommonAncestor(node20, node7, node17))
}

test();