const { Queue } = require('./../stacksAndQueues/queue')
const { BinaryTreeNode } = require('./node');

function BSTSequences(root) {
    if (!root) {
        return [];
    }

    const nodeQueue = new Queue();
    const sequences = [[root.data]];
    nodeQueue.add(root);

    while (!nodeQueue.isEmpty()) {
        const { left, right } = nodeQueue.remove();

        if (left || right) {
            const length = sequences.length
            for (let i = 0; i < length; i++) {
                if (left && right) {
                    sequences.push([...sequences[i], left.data, right.data]);

                    sequences[i].push(right.data)
                    sequences[i].push(left.data)

                } else {
                    sequences[i].push(left ? left.data : right.data);
                }
            }

            if (left) {
                nodeQueue.add(left);
            }

            if (right) {
                nodeQueue.add(right);
            }

        }
    }

    return sequences;
}

const test = () => {

    const node5 = new BinaryTreeNode(5);
    const node3 = new BinaryTreeNode(3);
    const node7 = new BinaryTreeNode(7);
    const node2 = new BinaryTreeNode(2);
    const node4 = new BinaryTreeNode(4);
    const node6 = new BinaryTreeNode(6);
    const node8 = new BinaryTreeNode(8);
    const node9 = new BinaryTreeNode(9);

    node5.left = node3;
    node5.right = node7;

    node3.left = node2;
    node3.right = node4;

    node7.left = node6;
    node7.right = node8;

    node8.right = node9;

    console.log(BSTSequences(node5));
}

test();