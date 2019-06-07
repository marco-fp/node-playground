const { BinaryTreeNode } = require('./node');
const { Queue } = require('./../stacksAndQueues/queue')

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class BinaryTree {
    constructor() {
        this.nodeCount = 0;
        this.root = null;
    }

    getRandomNode() {
        const index = getRandomInt(0, this.nodeCount - 1);
        return this.getIthNodeInOrder(index);
    }

    getIthNodeInOrder(index) {
        console.log('getting ', index)
        if (index > this.nodeCount || index < 0) {
            return null;
        }

        const q = new Queue();
        let count = 0;
        q.add(this.root);

        while (!q.isEmpty()) {
            const node = q.remove();

            console.log({node})

            if (count === index) {
                return node;
            }

            count++;

            if (node.left) {
                q.add(node.left);
            }

            if (node.right) {
                q.add(node.right);
            }
        }
    }
}

const test = () => {
    const tree = new BinaryTree();

    const node1 = { data: 1 }
    const node2 = { data: 2 }
    const node3 = { data: 3 }
    const node4 = { data: 4 }

    tree.root = node1;
    tree.nodeCount = 4;

    tree.root.left = node2;
    tree.root.right = node3;

    node2.left = node4;

    console.log('Result', tree.getRandomNode())
}

test();