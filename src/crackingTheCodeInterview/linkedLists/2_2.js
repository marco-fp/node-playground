function KthToLast(head, k) {
    let fastNode = head;
    let count = 1;

    while (count < k && fastNode.next) {
        count++;
        fastNode = fastNode.next;
    }

    if (count !== k) {
        return null;
    }

    let slowNode = head;

    while (fastNode.next) {
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }

    return slowNode;
}

function ListNode(val) {
    this.data = val;
    this.next = null;
}

const arrayOfValues = [1, 2, 1, 3, 4, 3];

const linkedList = new ListNode(arrayOfValues[0]);
let node = linkedList;

for (let i = 1; i < arrayOfValues.length; i++) {
    node.next = new ListNode(arrayOfValues[i]);
    node = node.next;
}

console.log(JSON.stringify(KthToLast(linkedList, 4)))