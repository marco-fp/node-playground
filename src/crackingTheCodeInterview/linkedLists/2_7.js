function findIntersection(a, b) {
    let lengthA = 0;
    let nodeA = a;
    while (nodeA) {
        lengthA++;
        nodeA = nodeA.next;
    }

    let lengthB = 0;
    let nodeB = b;
    while (nodeB) {
        lengthB++;
        nodeB = nodeB.next;
    }

    let diffLength;
    let fastNode;
    let slowNode;

    if (lengthA > lengthB) {
        diffLength = lengthA - lengthB;
        fastNode = a;
        slowNode = b;
    } else {
        diffLength = lengthB - lengthA;
        fastNode = b;
        slowNode = a;
    }

    while (diffLength) {
        diffLength--;
        fastNode = fastNode.next;
    }

    let intersection = null;

    while (fastNode && slowNode) {
        if (fastNode === slowNode) {
            intersection = fastNode;
            break;
        }

        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }

    return intersection;
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

const values = [1, 2, 3, 4, 5, 6];

const dummyHead1 = new ListNode(null);
let node1 = dummyHead1;

const dummyHead2 = new ListNode(null);
let node2 = dummyHead2;

for (let i = 0; i < values.length; i++) {

    node1.next = new ListNode(values[i]);
    node1 = node1.next;

    if (i === 3) {
        node2.next = node1;
    } else if (i < 3) {
        node2.next = new ListNode(values[i]);
        node2 = node2.next;
    }
}

const list1 = dummyHead1.next;

const list2 = dummyHead2.next;

console.log(linkedListToArray(list1));
console.log(linkedListToArray(list2));

console.log(JSON.stringify(findIntersection(list1, list2)));
