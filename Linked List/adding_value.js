// =======================> file for creating a node and adding the value in the linkedlist<=====================

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
  printvalue(value) {
    let currntValue = this.head;
    while (currntValue !== null) {
      console.log(currntValue.value);
      currntValue = currntValue.next;
    }
  }
}

const list = new linkedList();
list.addValue(1);
list.addValue(2);
list.addValue(3);
list.addValue(4);
list.addValue(5);
list.printvalue()
