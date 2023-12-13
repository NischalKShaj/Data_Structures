// ============================> file to remove dulplicate from the doubly linked list <===========================

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
  removeDuplicate() {
    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.value === current.next.value) {
        const duplicateNode = current.next;
        current.next = current.next.next;
        if (current.next !== null) {
          current.next.prev = current;
        }
        duplicateNode.next = null;
        duplicateNode.prev = null;
      } else {
        current = current.next;
      }
    }
  }
  display() {
    let current = this.head;
    while (current !== null) {next
      console.log(current.value);
      current = current.next;
    }
  }
}
const list = new doublyLinked();
list.addValue(1);
list.addValue(1);
list.addValue(1);
list.addValue(2);
list.addValue(2);
list.addValue(3);
list.addValue(3);
list.addValue(4);
list.removeDuplicate();
list.display();
