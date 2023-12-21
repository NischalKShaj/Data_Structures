// =============================> file for showing the palindrome in queue <====================

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
    this.arr = [];
    this.length = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.rear === null) {
      this.rear = node;
      this.front = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.arr.push(node.value);
    this.length++;
  }
  isPalindrome() {
    if (this.front === null) {
      console.log("stack underflow");
      return;
    }
    let current = this.rear;
    let i = 0;
    while (current !== null) {
      if (this.arr[i] !== current.value) {
        console.log("not palindrome");
        return;
      }
      current = current.next;
      i++;
    }
    console.log("is palindroem");
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
queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.display();
queue.isPalindrome();
