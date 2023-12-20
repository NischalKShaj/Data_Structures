// =========================> file to show how to convert stack to queue <=======================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.size = 0;
    this.top = null;
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
  pop() {
    let current;
    if (this.top === null) {
      console.log("stack underflow");
      return;
    } else {
      current = this.top;
      this.top = this.top.next;
    }
    this.size--;
    return current.value;
  }
  display() {
    let current = this.top;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
class Queue {
  constructor() {
    this.stack = new Stack();
  }
  enqueue(value) {
    this.stack.push(value);
    let size = this.stack.size;
    while (size > 1) {
      this.stack.push(this.stack.pop());
      size--;
    }
  }
  dequeue() {
    if (this.stack === null) {
      console.log("queue empty");
      return;
    }
    return this.stack.pop();
  }
  display() {
    return this.stack.display();
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
queue.dequeue();
queue.display();
