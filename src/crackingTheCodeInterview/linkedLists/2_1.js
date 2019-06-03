function removeDuplicates(head) {
    const values = new Set();
    let node = head;

    while (node && node.next) {
        values.add(node.data);
        const nextValue = node.next.data;

        if (values.has(nextValue)) {
            node.next = node.next.next;
        }

        node = node.next;
    }

    return head;
}

function ListNode(val) {
    this.data = val;
    this.next = null;
}


const arrayOfValues = [1, 2, 1, 3, 4, 3];

const linkedList = new ListNode(arrayOfValues[0]);
let node = linkedList;

for(let i = 1; i < arrayOfValues.length; i++) {
    node.next = new ListNode(arrayOfValues[i]);
    node = node.next;
}

console.log(JSON.stringify(removeDuplicates(linkedList)))