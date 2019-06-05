class MinStack {
    constructor() {
        this.minStack = new Stack();
        this.stack = new Stack();
    }

    pop() {
        const value = this.stack.pop();
        if (value === this.minStack.peek()) {
            this.minStack.pop();
        }

        return value;
    }

    push(value) {
        if (this.minStack.peek() >= value) {
            this.minStack.push(value);
        }

        this.stack.push(value);
    }

    peek() {
        return this.stack.peek();
    }

    min() {
        return this.minStack.peek();
    }

    isEmpty() {
        return this.stack.isEmpty();
    }
}
