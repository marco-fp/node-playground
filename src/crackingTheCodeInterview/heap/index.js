class Heap {
    constructor() {
        this.data = [];
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        const leftIndex = this.getLeftChildIndex(index);
        return this.data[leftIndex];
    }

    rightChild(index) {
        const rightIndex = this.getRightChildIndex(index);
        return this.data[rightIndex];
    }

    parent(index) {
        const parentIndex = this.getParentIndex(index);
        return this.data[parentIndex];
    }

    hasLeftChild(index) {
        return getLeftChildIndex(index) < this.data.length;
    }

    hasRightChild(index) {
        return getRightChildIndex(index) < this.data.length;
    }

    hasParent(index) {
        return getParentIndex(index) < this.data.length;
    }

    swap(idx1, idx2) {
        const tmp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = tmp;
    }

    peek() {
        if (this.data.length === 0) {
            throw new Error('Empty heap');
        }

        return this.data[0];
    }

    // Set last element as root, move down until in order.
    poll() {
        if (this.data.length === 0) {
            throw new Error('Empty heap');
        }

        const item = this.data[0];
        this.data[0] = this.data.pop();

        this.heapifyDown();

        return item;
    }

    // Add element in last position, move up until in order.
    add(item) {
        this.data.push(item);

        this.heapifyUp();
    }

    heapifyUp() {
        index = this.data.length - 1;

        while (this.hasParent(index) && this.parent(index) > this.data[index]) {
            const parentIndex = this.getParentIndex(index);
            swap(parentIndex, index);
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChild(index) &&
                this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.data[index] < this.data[smallerChildIndex]) {
                break;
            } else {
                swap(index, smallerChildIndex);
            }
        }
    }

}
