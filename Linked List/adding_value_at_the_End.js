// =========================> file to add a new node at the end of a linked list <=================================

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
  addValueAtEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  printlist(value) {
    let currentValue = this.head;
    while (currentValue !== null) {
      console.log(currentValue.value);
      currentValue = currentValue.next;
    }
  }
}

const list = new linkedList();
list.addValue(1);
list.addValue(2);
list.addValue(3);

list.addValueAtEnd(0);
list.printlist();
