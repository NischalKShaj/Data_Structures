// ====================> file to remove the middle value from the stack <==================================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  findMiddle() {
    let middle = Math.floor(this.size / 2);
    this.remove(middle);
  }

  remove(middle) {
    if (this.top === null) {
      console.log("Stack underflow");
      return;
    }
    if (middle === 0) {
      this.top = this.top.next;
    } else {
      let current = this.top;
      let index = 0;
      while (index < middle - 1 && current.next !== null) {
        current = current.next;
        index++;
      }
      if (current.next === null) {
        console.log("Position out of bounds");
        return;
      }
      current.next = current.next.next;
    }
    this.size--;
  }

  display() {
    let current = this.top;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Original Stack:");
stack.display();

stack.findMiddle();

console.log("Stack after finding and removing the middle element:");
stack.display();
