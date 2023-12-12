// ==========================> file for printing the values of doubly linked list in reverseorder <======================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinked {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addValue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  displayInReverse(value) {
    let current = this.tail;
    while (current !== null) {
      console.log(current.value);
      current = current.prev;
    }
  }
}
const list = new doublyLinked();
list.addValue(1);
list.addValue(2);
list.addValue(3);
list.addValue(4);
list.addValue(5);
list.addValue(6);
list.addValue(7);
list.displayInReverse();
