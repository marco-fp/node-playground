function buildOrder(projects, dependencies) {
    const map = new Map();

    projects.forEach(p => {
        map.set(p, { incoming: 0, children: [] });
    });

    dependencies.forEach(([parent, child]) => {
        const pNode = map.get(parent);
        const cNode = map.get(child);
        cNode.incoming += 1;
        pNode.children.push(child);
    });

    const build = [];

    for (const [project, node] of map.entries()) {
        if (node.incoming === 0) {
            build.push(project);
        }
    }

    if (!build.length) {
        return null;
    }

    let buildIdx = 0;

    while (buildIdx < build.length) {
        const project = build[buildIdx];
        const pNode = map.get(project);

        pNode.children.forEach(child => {
            const cNode = map.get(child);
            cNode.incoming -= 1;
            if (cNode.incoming === 0) {
                build.push(child);
            }
        });

        buildIdx++;
    }

    if (build.length !== projects.length) {
        return null;
    }

    return build;
}

const test = () => {
    const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
    const dependencies = [
        ['a', 'd'],
        ['f', 'b'],
        ['b', 'd'],
        ['f', 'a'],
        ['d', 'c']
    ];

    console.log(buildOrder(projects, dependencies))
}

test();