function validateBST(root) {
    return checkBST(root, null, null);
}

function checkBST(node, min, max) {
    if (!node) {
        return true;
    }

    if ((min && node.data <= min) || (max && node.data > max)) {
        return false;
    }

    if (!checkBST(node.left, min, node.data) || !checkBST(node.right, node.data, max)) {
        return false;
    }

    return true;
}


validateBST(null);