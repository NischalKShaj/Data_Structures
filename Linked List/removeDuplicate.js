// ===================> file for deleting duplicate node from the linkedlist <=============================

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
  removeDuplicate() {
    let currrent = this.head;
    while (currrent !== null && currrent.next !== null) {
      if (currrent.value === currrent.next.value) {
        currrent.next = currrent.next.next;
      } else {
        currrent = currrent.next;
      }
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
const list = new linkedList()
list.addValue(1)
list.addValue(1)
list.addValue(2)
list.addValue(3)
list.addValue(3)
list.addValue(3)
list.removeDuplicate()
list.display()

