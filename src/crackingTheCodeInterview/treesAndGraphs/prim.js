function prim(root) {
    const visited = new Set();
    const edgesQ = new PriorityQueue();

    root.edges.forEach(edge => {
        edgesQ.add(edge, edge.weight);
    });

    const mst = new Graph();


    visited.add(root);

    while (!edgesQ.isEmpty()) {
        const minEdge = edgesQ.pop();

        let node = !visited.has(minEdge.start) && minEdge.start;
        if (!node) {
            node = !visited.has(minEdge.end) && minEdge.end;
        }

        if (node) {
            visited.add(node);

            mst.addEdge(minEdge);

            node.edges.forEach(edge => {
                if (!visited.has(edge.start) ||
                    !visited.has(edge.end)) {
                    edgesQ.add(edge, edge.weight);
                }
            });
        }
    }

    return mst;
}
