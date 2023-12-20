// ===============> file to show how to implement a queue to a stack <==============================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      this.rear = newNode;
      this.front = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }
  dequeue() {
    let current;
    if (this.rear === null) {
      console.log("queue empty");
      return;
    } else {
      current = this.front;
      this.front = this.front.next;
    }
    if (this.front === null) {
      this.rear = null;
    }
    this.length--;
    return current.value;
  }
  display() {
    let current = this.front;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

class Stack {
  constructor() {
    this.queue = new Queue();
  }
  push(value) {
    this.queue.enqueue(value);
    let size = this.queue.size;
    while (size > 1) {
      this.queue.enqueue(this.queue.dequeue());
      size--;
    }
  }
  pop() {
    if (this.queue === null) {
      console.log("stack underflow");
      return;
    }
    return this.queue.dequeue();
  }
  display() {
    this.queue.display();
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.display();
stack.pop();
stack.display();
