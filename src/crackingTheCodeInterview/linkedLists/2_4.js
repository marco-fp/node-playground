function partition(head, value) {
    let leftHead = null;
    let rightHead = null;
    let leftNode = null;
    let rightNode = null;

    let node = head;

    while (node) {
        if (node.data < value) {
            if (!leftHead) {
                leftHead = node;
                leftNode = node;
            } else {
                leftNode.next = node;
                leftNode = node;
            }
        } else {
            if (!rightHead) {
                rightHead = node;
                rightNode = node;
            } else {
                rightNode.next = node;
                rightNode = node;
            }
        }

        node = node.next;
    }

    rightNode.next = null;

    leftNode.next = rightHead;

    return leftHead;
}


function ListNode(val) {
    this.data = val;
    this.next = null;
}

function linkedListToArray(head) {
    let node = head;
    const values = [];
    while(node.next) {
        values.push(node.data);
        node = node.next;
    }

    values.push(node.data);

    return values;
}

const arrayOfValues = [3, 5, 8, 5, 10, 2, 1];

const linkedList = new ListNode(arrayOfValues[0]);
let node = linkedList;

for (let i = 1; i < arrayOfValues.length; i++) {
    node.next = new ListNode(arrayOfValues[i]);
    node = node.next;
}

console.log(linkedListToArray(linkedList))
console.log(linkedListToArray(partition(linkedList, 5)))