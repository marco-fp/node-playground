function isPalindrome(head) {
    const node = head;
    const dummyHead = head;
    return !!compare(node, dummyHead);
}

function compare(node, head) {
    if (!node.next) {
        return node.data === head.data ? head.next : null;
    }

    const topNode = compare(node.next, head);

    if (!topNode) {
        return null;
    }

    if (topNode) {

    }

    return topNode.data === node.data ? (topNode.next || true) : null;
}

function ListNode(val) {
    this.data = val;
    this.next = null;
}

function linkedListToArray(head) {
    let node = head;
    const values = [];
    while (node.next) {
        values.push(node.data);
        node = node.next;
    }

    values.push(node.data);

    return values;
}

function arrayToLinkedList(values) {
    const dummyHead = new ListNode(null);
    let node = dummyHead;

    for (let i = 0; i < values.length; i++) {
        node.next = new ListNode(values[i]);
        node = node.next;
    }

    return dummyHead.next;
}

const values = [1, 2, 3, 2, 1, 1];

const list = arrayToLinkedList(values);


console.log(JSON.stringify(isPalindrome(list)));