const { Queue } = require('./../stacksAndQueues/queue')
const { GraphNode } = require('./node')

function isRouteBetweenNodes(a, b) {
    const queue = new Queue();

    queue.add(a);

    while (!queue.isEmpty()) {
        const node = queue.remove();

        node.visited = true;

        if (node === b) {
            return true;
        }

        node.children.forEach(child => {
            if (!child.visited) {
                queue.add(child)
            }
        });
    }

    return false;
}

const test = () => {
    const node1 = new GraphNode(1);
    const node2 = new GraphNode(2);
    const node3 = new GraphNode(3);

    const node4 = new GraphNode(4);
    const node5 = new GraphNode(5);

    const node6 = new GraphNode(6);
    const node7 = new GraphNode(7);

    node1.children = [node2, node3];

    node2.children = [node4, node5];

    node5.children = [node6];

    node7.children = [node5]

    console.log(isRouteBetweenNodes(node1, node6))
}

test();