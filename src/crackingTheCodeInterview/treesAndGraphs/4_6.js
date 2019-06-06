function inOrderSuccessor(node) {
    if (!node) {
        return null;
    }

    if (node.right) {
        let child = node.right;

        while (child.left) {
            child = child.left;
        }

        return child;
    } else {
        let child = node;
        let parent = node.parent;

        while (parent && parent.left !== node) {
            child = parent;
            parent = parent.parent;
        }

        return child;
    }
}

inOrderSuccessor(null);