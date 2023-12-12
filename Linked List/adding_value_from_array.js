// ==============================>file for adding value from the array to a linked list <=========================

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
  addArray(array) {
    for (let value of array) {
      this.addValue(value);
    }
  }
  display(value) {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new linkedList();
const array = [1, 2, 3, 4, 5];
list.addArray(array);
list.display();
