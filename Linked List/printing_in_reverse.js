// ======================> showing the linkedlist in reverse order

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
  display(value) {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
  reverse(value) {
    if (this.head === null) {
      console.log("list empty");
      return;
    }
    let temp = this.head;
    let prev = null;
    let next = null;
    while (temp !== null) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    this.head = prev;
    this.display();
  }
}

const list = new linkedList()
list.addValue(1)
list.addValue(2)
list.addValue(3)
list.reverse()