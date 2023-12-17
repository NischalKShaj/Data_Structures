// =================================> file to show enqueue in the queue <=============================

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
    this.size = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      this.front = this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    this.size++;
  }
  display() {
    let current = this.front;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.display();
