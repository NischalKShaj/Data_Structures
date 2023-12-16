class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    this.length++;
  }

  linkedLength() {
    let mid = Math.floor(this.length / 2);
    this.delete(mid);
  }

  delete(mid) {
    if (this.head === null || mid >= this.length) {
      console.log("Invalid mid or list is empty");
      return;
    }

    if (mid === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;
    let index = 0;
    while (index < mid - 1) {
      current = current.next;
      index++;
    }

    if (current.next !== null) {
      current.next = current.next.next;
      this.length--;
    } else {
      console.log("Invalid mid");
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

const list = new Linked();
list.addValue(1);
list.addValue(2);
list.addValue(3);
list.addValue(4);
list.addValue(5);
console.log("Original List:");
list.display();
console.log("After deleting mid element:");
list.linkedLength();
list.display();
