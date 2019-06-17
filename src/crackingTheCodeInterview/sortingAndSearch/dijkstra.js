
function dijkstra(graph, root) {
    const distances = new Map();
    const visited = new Set();
    const previous = new Map();
    const queue = new PriorityQueue();

    graph.nodes.forEach(node => {
        distances.set(node, Infinity);
        previous.set(node, null);
    });

    distances.set(root, 0);

    queue.add(root, distances.get(root));

    while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();

        // child: {node: GraphNode, distance: number}
        currentNode.children.forEach(child => {
            if (!visited.has(child.node)) {
                visited.add(child.node);

                const existingPath = distances.get(child.node);
                const newPath = distances.get(currentNode) + child.distance;

                if (newPath < existingPath) {
                    distances.set(child, newPath);

                    if (queue.hasValue(child)) {
                        queue.changePriority(child, distances.get(child));
                    }

                    previous.set(child, currentNode);
                }

                if (!queue.hasValue(child)) {
                    queue.enqueue(child, distances.get(child));
                }
            }
        });
    }

    return {
        distances,
        previous
    }
}
