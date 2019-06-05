class GraphNode {
    constructor(value) {
        this.data = value;
        this.children = [];
    }
}

class BinaryTreeNode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = {
    GraphNode,
    BinaryTreeNode,
}