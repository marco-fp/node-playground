class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    add(data) {
        const item = new QueueNode(data);
        if (this.last !== null) {
            this.last.next = item;
        }

        this.last = item;

        if (this.first === null) {
            this.first = item;
        }
    }

    remove() {
        if (this.first === null) {
            throw new Error('Empty queue!');
        }

        const value = this.first.data;
        this.first = this.first.next;

        if (this.first === null) {
            this.last = null;
        }

        return value;
    }

    peek() {
        if (this.first === null) {
            throw new Error('Empty queue!');
        }

        return this.first.data;
    }

    isEmpty() {
        return this.first === null;
    }
}

module.exports = {
    QueueNode, Queue
}