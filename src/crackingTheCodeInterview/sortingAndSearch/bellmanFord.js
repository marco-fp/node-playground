function bellmanFord(graph, root) {
    const distances = new Map();
    const previous = new Map();

    graph.nodes.forEach(node => {
        distances.set(node, Infinity);
        previous.set(node, null);
    });

    distances.set(root, 0);

    for (let it = 0; it < graph.nodes.length - 1; it++) {
        distances.keys().forEach(node => {
            node.children.forEach(child => {
                const edge = child.edge;

                const distanceToNode = distances.get(node);
                const distanceToChild = distanceToNode + edge.weight;

                if (distanceToChild < distances.get(child)) {
                    distances.set(child, distanceToChild);
                    previous.set(child, node);
                }
            });
        });
    }

    return {
        distances,
        previous
    }
}
