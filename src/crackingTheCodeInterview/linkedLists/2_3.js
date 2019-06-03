function deleteMiddleNode(node) {
    node.data = node.next.data;
    node.next = node.next.next;
}

function ListNode(val) {
    this.data = val;
    this.next = null;
}

const arrayOfValues = [1, 2, 3, 4, 5];

const linkedList = new ListNode(arrayOfValues[0]);
let node = linkedList;
let middleNode;

for (let i = 1; i < arrayOfValues.length; i++) {
    node.next = new ListNode(arrayOfValues[i]);
    node = node.next;
    if (i === 2) {
        console.log(node.data)
        middleNode = node;
    }
}

console.log(JSON.stringify(linkedList))
deleteMiddleNode(middleNode);
console.log(JSON.stringify(linkedList))