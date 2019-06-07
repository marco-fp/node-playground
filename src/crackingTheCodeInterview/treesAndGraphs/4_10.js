const { BinaryTreeNode } = require('./node');

function checkSubtree(big, small) {
    if (!big) {
        return false;
    }

    if (!small) {
        return true;
    }

    return searchSubtree(big, small);
}

function searchSubtree(a, b) {
    if (a.data === b.data && matchTree(a, b)) {
        return true;
    }

    return searchSubtree(a.left, b) || searchSubtree(a.right, b);
}

function matchTree(a, b) {
    if (!a && !b) {
        return true;
    }

    if (!a || !b) {
        return false;
    }

    if (a.data !== b.data) {
        return false;
    }

    return matchTree(a.left, b.left) && matchTree(a.right, b.right);
}

const test = () => {
    const big1 = new BinaryTreeNode(1);
    const big2 = new BinaryTreeNode(2);
    const big3 = new BinaryTreeNode(3);
    const big4 = new BinaryTreeNode(4);
    const big5 = new BinaryTreeNode(5);
    
    const small2 = new BinaryTreeNode(2);
    const small4 = new BinaryTreeNode(4);
    const small5 = new BinaryTreeNode(5);

    big1.left = big2;
    big1.right = big3;

    big2.left = big4;
    big2.right = big5;

    small2.left = small4;
    small2.right = small5;

    console.log(checkSubtree(big1, small2));
}

test();