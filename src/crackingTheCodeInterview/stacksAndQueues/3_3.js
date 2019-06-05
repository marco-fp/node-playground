const { Stack } = require('./stack');

class SetOfStacks {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.sizes = [];
        this.stacks = [];
    }

    push(data) {
        if (!this.sizes.length || this.sizes[this.lastIndex()] === this.maxSize) {
            this.sizes.push(0);
            this.stacks.push(new Stack());
        }

        this.sizes[this.lastIndex()]++;
        this.stacks[this.lastIndex()].push(data);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }

        this.sizes[this.lastIndex()]--;
        const value = this.stacks[this.lastIndex()].pop();

        if (this.sizes[this.lastIndex()] === 0) {
            this.sizes.pop();
            this.stacks.pop();
        }

        return value;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }

        return this.stacks[this.lastIndex()].peek();
    }

    popAt(index) {
        if (index <= this.sizes.length) {
            throw new Error('Out of bounds');
        }

        this.sizes[index]--;

        return this.stacks[index].pop();
    }

    isEmpty() {
        return this.stacks.length === 0;
    }

    lastIndex() {
        return this.sizes.length - 1;
    }
}

const test = () => {
    const s = new SetOfStacks(10);

    s.push(10);

    s.push(5)

    console.log(s.pop());
    console.log(s.peek());
}

