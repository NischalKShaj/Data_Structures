// ==================> file to push the element in the stack <======================

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
  display() {
    let current = this.top;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const newStack = new Stack();
newStack.push(5);
newStack.push(4);
newStack.push(3);
newStack.push(2);
newStack.push(1);
newStack.push(0);
newStack.display();
