class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    pop() {
        if (!this.top) {
            throw new Error('Empty stack');
        }

        const item = this.top.data;
        this.top = this.top.next;

        return item;
    }

    push(data) {
        const item = new StackNode(data)

        item.next = this.top;
        this.top = item;
    }

    peek() {
        if (!this.top) {
            throw new Error('Empty stack');
        }

        return this.top.data;
    }

    isEmpty() {
        return this.top === null;
    }

    toArray() {
        let node = this.top;
        const values = [];
        while (node) {
            values.push(node.data);
            node = node.next;
        }

        return values;
    }
}

const test = () => {
    const s = new Stack();

    s.push(10);
    s.push(5);

    console.log(s.pop());
    console.log(s.peek());
}

module.exports = {
    Stack, StackNode
}