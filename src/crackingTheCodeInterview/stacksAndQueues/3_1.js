class TripleStack {
    constructor(stackSize) {
        this.sizes = [0, 0, 0];
        this.stackSize = stackSize;
        this.stacks = new Array(3 * stackSize);
    }

    pop(stackIndex) {
        if (this.isEmpty(stackIndex)) {
            throw new Error(`Stack ${stackIndex} is empty.`);
        }

        const item = this.stacks[indexOfTop(stackIndex)];

        this.stacks[index] = undefined;
        this.sizes[stackIndex]--;

        return item;
    }

    push(stackIndex, data) {
        if (this.isFull(stackIndex)) {
            throw new Error(`Stack ${stackIndex} is full.`);
        }


        this.stacks[this.indexOfTop(stackIndex) + 1] = data;
        this.sizes[stackIndex]++;
    }

    peek(stackIndex) {
        if (this.isEmpty(stackIndex)) {
            throw new Error(`Stack ${stackIndex} is empty.`);
        }


        return this.stacks[this.indexOfTop(stackIndex)];
    }

    indexOfTop(stackIndex) {
        return this.sizes[stackIndex] + this.stackSize * 3 - 1;
    }

    isEmpty(stackIndex) {
        return this.sizes[stackIndex] === 0;
    }

    isFull(stackIndex) {
        return this.sizes[stackIndex] === this.stackSize;
    }
}
