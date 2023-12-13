// ==========================> file to insert a node at a specific position in alinked list <=====================

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
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
  addAtSpecific(value, position) {
    const newNode = new Node(value);
    if (position === 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      let current = this.head;
      let index = 0;
      while (current !== null && index < position - 1) {
        current = current.next;
        index++;
      }
      if (current === null) {
        console.log("out of bounds");
        return;
      }
      newNode.prev = current;
      newNode.next = current.next;
      if (current.next !== null) {
        current.next.prev = newNode;
      }
      current.next = newNode;
    }
  }
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
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
list.display();
list.addAtSpecific(3, 5);
list.display();
