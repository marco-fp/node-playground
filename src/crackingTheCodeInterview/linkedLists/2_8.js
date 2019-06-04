function loopDetection(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            break;
        }
    }

    if (!fast || !fast.next) {
        return null;
    }

    slow = head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
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

    return [dummyHead.next, node];
}

const values = [1, 2, 3, 4, 5, 6];

const [head, last] = arrayToLinkedList(values);

last.next = head.next.next;


console.log(loopDetection(head));