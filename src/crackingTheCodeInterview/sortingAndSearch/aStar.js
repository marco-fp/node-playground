function aStar(graph, start, end) {
    const distances = new Map();
    const visited = new Set();
    const heuristics = new Map();
    const previous = new Map();
    const q = new PriorityQueue();

    graph.forEach(node => {
        distances.set(node, Infinity);
        previous.set(node, null);
    })

    distances.set(start, 0);
    const hStart = manhattanDistance(start, end);
    heuristics.set(start, hStart);
    q.add(start, hStart);

    while (!q.isEmpty()) {
        const node = q.pop();

        if (node === end) {
            return reconstructPath(node, previous);
        }

        node.children.forEach(child => {
            if (!visited.has(child)) {
                visited.add(child);

                const currD = distances.get(child.node);
                const newD = distances.get(node) + child.distance;

                if (newD < currD) {
                    distances.set(child, newD);
                    heuristics.set(child, manhattanDistance(child, end));
			        previous.set(child, node);

                    if (!q.has(child)) {
                        q.enqueue(child);
                    }

                    const h = heuristics.get(child);
                    const d = distances.get(child);
                    q.updatePriority(child, h + d);
                }
            }
        });
    }

    return [];
}
