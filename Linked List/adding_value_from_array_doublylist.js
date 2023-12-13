// =====================>file to convert an array to a doubly linked list <===========================================

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
  fromArray(array) {
    for (let value of array) {
      this.addValue(value);
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
const array = [1, 2, 3, 4, 5];
list.fromArray(array);
list.display();
