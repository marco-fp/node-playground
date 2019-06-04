class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
    }

    pop() {
        if (this.top === null) {
            throw new Error('Empty stack');
        }

        item = this.top.data;
        this.top = this.top.next;

        return item;
    }

    push(data) {
        const item = new StackNode(data)

        item.next = this.top;
        this.top = item;
    }

    peek() {
        if (this.top === null) {
            throw new Error('Empty stack');
        }

        return this.top.data;
    }

    isEmpty() {
        return this.top === null;
    }
}

module.exports = {
    Stack, StackNode
}