function magicIndex(values) {
    return findMagicIndex(values, 0, values.length - 1);
}

function findMagicIndex(values, start, end) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (values[mid] === mid) {
        return mid;
    }

    if (values[mid] < mid) {
        return findMagicIndex(values, mid + 1, end);
    } else {
        return findMagicIndex(values, start, mid - 1);
    }
}


const test = () => {
    const values = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]
    console.log(magicIndex(values))
}

function magicIndexFollowUp(values) {
    return findMagicIndexFollowUp(values, 0, values.length - 1);
}

function findMagicIndexFollowUp(values, start, end) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);
    const midValue = values[mid];

    if (mid === midValue) {
        return mid;
    }

    const leftEnd = Math.min(midValue, mid - 1);
    const left = findMagicIndexFollowUp(values, start, leftEnd);

    if (left >= 0) {
        return left;
    }

    const rightStart = Math.max(midValue, mid + 1);
    const right = findMagicIndexFollowUp(values, rightStart, end);

    return right;
}


const testFollowUp = () => {
    const values = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13];
    console.log(magicIndexFollowUp(values));
}

test();
testFollowUp();