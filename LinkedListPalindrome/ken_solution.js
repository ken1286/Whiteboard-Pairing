class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

//
const e = new ListNode(1);
const d = new ListNode(2, e);
const c = new ListNode(3, d);
const b = new ListNode(2, c);
const a = new ListNode(1, b);

function isLinkedListPalindrome(listHead) {
  let currentNode = listHead;
  let nextNode = listHead.next;
  listHead.next = null;
  let prevNode = currentNode;

  const originalList = [];

  while (nextNode !== null) {
    prevNode = currentNode;
    originalList.push(currentNode.value);
    currentNode = nextNode;
    nextNode = currentNode.next;
    currentNode.next = prevNode;
  }
  originalList.push(currentNode.value);

  const newList = [];

  while (currentNode !== null) {
    console.log(currentNode.value);
    newList.push(currentNode.value);
    currentNode = currentNode.next;
  }

  for (let i = 0; i < originalList.length; i++) {
    if (originalList[i] !== newList[i]) {
      return false;
    }
  }

  return true;
}

console.log(isLinkedListPalindrome(a));
