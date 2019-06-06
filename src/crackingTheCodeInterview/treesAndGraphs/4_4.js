function checkBalanced(root) {
    if (!root) {
        return true;
    }
    
    return checkIfBalanced(root) !== -1;
}

function checkIfBalanced(node) {
    if (!node.left && !node.right) {
        return 0;
    }

    let leftHeight = 0;
    let rightHeight = 0;

    if (node.left) {
        const leftNodeHeight = checkIfBalanced(node.left);

        if (leftNodeHeight === -1) {
            return -1;
        }

        leftHeight = 1 + leftNodeHeight;
    }

    if (node.right) {
        const rightNodeHeight = checkIfBalanced(node.right);

        if (rightNodeHeight === -1) {
            return -1;
        }

        rightHeight = 1 + rightNodeHeight;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }

    return Math.max(leftHeight, rightHeight);
}


checkBalanced(null)