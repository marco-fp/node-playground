function kruskal(graph) {
    const sortedEdges = [...graph.edges].sort(
        (a, b) => a.weight - b.weight
    );

    const disjoinedSet = new DisjoinedSet(graph.nodes);
    const mst = new Graph();

    sortedEdges.forEach(edge => {
        if (!disjoinedSet.inSameSet(edge.start, edge.end)) {
            disjoinedSet.union(edge.start, edge.end);
            mst.addEdge(edge);
        }
    })

    return mst;
}
