// =======================> removing middle element from the queue <===========================

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
      this.rear = newNode;
      this.front = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }
  findMid() {
    let middle = Math.floor(this.size / 2);
    this.remove(middle);
  }
  remove(middle) {
    if (this.front === 0) {
      console.log("Queue is empty");
    }
    if (middle === 0) {
      this.front = this.front.next;
    } else {
      let current = this.front;
      let index = 0;
      while (index < middle - 1 && current.next !== null) {
        current = current.next;
        index++;
      }
      if (current.next === null) {
        console.log("position out of bounds");
      }
      current.next = current.next.next;
    }
    this.size--;
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
queue.findMid();
queue.display();
