function compareBoxes(a, b) {
    if (a.height < b.height) {
        return 1;
    }
    if (a.height > b.height) {
        return -1;
    }
    return 0;
}

function sortBoxes(boxes) {
    boxes.sort(compareBoxes);
}

function createStacks(boxes) {
    sortBoxes(boxes);
    return maxStack(boxes, 0, null, []);
}

function canBePlacedAbove(bottom, top) {
    return bottom.height > top.height && bottom.width > top.width && bottom.depth > top.depth;
}

function maxStack(boxes, offset, bottom, maxMap) {
    if (offset >= boxes.length) {
        return 0;
    }

    const newBottom = boxes[offset];

    let heightWithBox = 0;

    if (bottom === null || canBePlacedAbove(bottom, newBottom)) {
        if (!maxMap[offset]) {
            maxMap[offset] = maxStack(boxes, offset + 1, newBottom, maxMap);
            maxMap[offset] += newBottom.height;
        }

        heightWithBox = maxMap[offset];
    }

    const heightWithouBox = maxStack(boxes, offset + 1, bottom, maxMap);

    return Math.max(heightWithBox, heightWithouBox);
}


const test = () => {
    const boxes = [
        {height: 1, width: 1, depth: 1},
        {height: 2, width: 2, depth: 2},
        {height: 3, width: 3, depth: 3},
        {height: 4, width: 4, depth: 4},
        {height: 5, width: 5, depth: 5},
        {height: 6, width: 6, depth: 6},
    ]

    console.log(createStacks(boxes))
}

test();