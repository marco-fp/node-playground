function ListNode(val) {
    this.data = val;
    this.next = null;
}

function sumLists(a, b) {
    let nodeA = a;
    let nodeB = b;
    let solutionDummyHead = new ListNode(-1);
    let solutionNode = solutionDummyHead;
    let carryFlag = false;

    while (nodeA && nodeB) {
        let sumValue = nodeA.data + nodeB.data;

        if (carryFlag) {
            sumValue += 1;
        }

        carryFlag = sumValue >= 10;

        const sumDigit = carryFlag ? sumValue - 10 : sumValue;

        solutionNode.next = new ListNode(sumDigit);

        solutionNode = solutionNode.next;
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }

    let remNode = nodeA ? nodeA : nodeB;

    while (remNode) {
        let sumValue = carryFlag ? remNode.data + 1 : remNode.data;

        carryFlag = sumValue >= 10;

        const sumDigit = carryFlag ? sumValue - 10 : sumValue;

        solutionNode.next = new ListNode(sumDigit);

        solutionNode = solutionNode.next;
        remNode = remNode.next;
    }

    if (carryFlag) {
        solutionNode.next = new ListNode(1);
    }

    return solutionDummyHead.next;
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

const numberA = [9, 9, 9];
const numberB = [9, 9, 9];

const listA = arrayToLinkedList(numberA);
const listB = arrayToLinkedList(numberB);

// console.log(JSON.stringify(arrayToLinkedList(numberA)));
// console.log(JSON.stringify(arrayToLinkedList(numberB)));

console.log(JSON.stringify(sumLists(listA, listB)));

// console.log(linkedListToArray(linkedList))
// console.log(linkedListToArray(partition(linkedList, 5)))