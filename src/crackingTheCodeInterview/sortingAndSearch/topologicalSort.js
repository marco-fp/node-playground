function topologicalSort(graph) {
    const order = [];

    graph.nodes.forEach(node => {
        if (node.incoming === 0) {
            order.push(node);
        }
    });

    if (!order.length) {
        return null;
    }

    let idx = 0;

    while (idx < build.length) {
        const node = build[idx];

        node.children.forEach(child => {
            child.incoming -= 1;

            if (child.incoming === 0) {
                order.push(child);
            }
        });

        idx++;
    }

    if (order.length !== graph.nodes.length) {
        return null;
    }

    return order;
}
