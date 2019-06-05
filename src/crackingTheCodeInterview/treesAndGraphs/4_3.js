function listDepth(root) {
    const list = new LinkedList();
    list.add(root);
    const lists = [list];
    buildListDepth(root.left, lists, 1);
    buildListDepth(root.right, lists, 1);

    return lists;
}

function buildListDepth(node, lists, depth) {
    if (!node) {
        return;
    }

    if (lists.length - 1 < depth) {
        lists.push(new LinkedList());
    }

    lists[depth].add(node);

    buildListDepth(node.left, lists, depth + 1);
    buildListDepth(node.right, lists, depth + 1);
}
