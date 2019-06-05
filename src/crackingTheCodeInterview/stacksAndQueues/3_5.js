const { Stack } = require('./stack')

function sortStack(stack) {
    const aux = new Stack();

    while (!stack.isEmpty()) {
        const tmp = stack.pop();

        while (!aux.isEmpty() && aux.peek() > tmp) {
            stack.push(aux.pop());
        }

        aux.push(tmp);
    }

    while (!aux.isEmpty()) {
        stack.push(aux.pop());
    }
}


const test = () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);

    console.log(s.toArray());

    sortStack(s);
    
    console.log(s.toArray());
}

test();