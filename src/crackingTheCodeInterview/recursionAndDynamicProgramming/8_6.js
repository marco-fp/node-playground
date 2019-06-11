const { Stack } = require('../stacksAndQueues/stack')

function towersOfHanoi(n, origin, destination, buffer) {
    if (n > 0) {
        towersOfHanoi(n - 1, origin, buffer, destination);
        destination.push(origin.pop());
        towersOfHanoi(n - 1, buffer, destination, origin);
    }
}

const test = () => {
    const origin = new Stack();
    const destination = new Stack();
    const buffer = new Stack();

    origin.push(4);
    origin.push(3);
    origin.push(2);
    origin.push(1);

    towersOfHanoi(4, origin, destination, buffer);

    console.log(JSON.stringify(destination));
}

test();