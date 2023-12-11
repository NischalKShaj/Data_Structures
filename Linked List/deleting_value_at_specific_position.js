// ===============================> file to show how to delete a node from a specific position <======================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  deleteNode(position) {
    if (this.head === null) {
      console.log("list is empty");
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let previous = null;
    let index = 0;
    while (current !== null && index < position) {
      previous = current;
      current = current.next;
      index++;
    }
    if (current === null) {
      console.log("position out of bound");
      return;
    }
    previous.next = current.next;
  }
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new linkedList();
list.addValue(1);
list.addValue(2);
list.addValue(3);
list.deleteNode(2);
list.printList();
