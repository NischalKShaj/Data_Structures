// =======================>adding a new node at specific position of a linked list <=========================

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
  addToSpecific(value, position) {
    const newNode = new Node(value);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let index = 0;
    while (current !== null && index < position - 1) {
      current = current.next;
      index++;
    }
    if (current === null) {
      console.log("position out of bound");
      return;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  printList(value) {
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
list.addValue(4);
list.addToSpecific(3, 2);
list.printList();
