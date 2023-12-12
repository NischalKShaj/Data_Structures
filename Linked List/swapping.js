// =======================> swapping a linkedlist using bubble sort <================================

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
  sort() {
    let swapped;
    do {
      swapped = false;
      let current = this.head;
      let prev = null;
      while (current !== null && current.next !== null) {
        const nextNode = current.next;
        if (current.next > nextNode.next) {
          if (prev === null) {
            this.head = nextNode;
          } else {
            prev.next = nextNode;
          }
          current.next = nextNode.next;
          nextNode.next = current;
          swapped = true;
        }
        prev = current;
        current = current.next;
      }
    } while (swapped);
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
list.addValue(6);
list.addValue(9);
list.addValue(5);
list.addValue(10);
list.sort();
list.display();
