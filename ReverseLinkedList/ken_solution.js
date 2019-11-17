class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(node) {
  let current = node;
  let next = current.next;
  let prev = node;
  node.next = null;

  while (next !== null) {
    prev = current;
    current = next;
    next = current.next;
    current.next = prev;
  }
}

const a = new ListNode('a');
const b = new ListNode('b');
const c = new ListNode('c');
const d = new ListNode('d');
const e = new ListNode('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/* Function that prints the contents of a linked list */
function printList(node) {
  let current = node;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

printList(a);
reverseList(a);
printList(e);
