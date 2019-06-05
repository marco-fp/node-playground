const { Stack } = require('./stack');

class MyQueue {
    constructor() {
        this.newElements = new Stack();
        this.oldElements = new Stack();
    }

    add(value) {
        this.newElements.push(value);
    }

    remove() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        if (this.oldElements.isEmpty()) {
            this.copyNewToOld();
        }

        return this.oldElements.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        if (this.oldElements.isEmpty()) {
            this.copyNewToOld();
        }

        return this.oldElements.peek();
    }

    copyNewToOld() {
        if (!this.oldElements.isEmpty()) {
            throw new Error("Cannot move new to old stack")
        }

        while (!this.newElements.isEmpty()) {
            this.oldElements.push(this.newElements.pop());
        }
    }

    isEmpty() {
        return this.oldElements.isEmpty() && this.newElements.isEmpty()
    }
}

const test = () => {
    const q = new MyQueue();

    q.add(1);

    q.add(2);

    q.add(3);

    console.log(q.peek());
    console.log(q.remove());
    console.log(q.remove());

    q.add(4);

    console.log(q.remove());

    console.log(q.remove());
}