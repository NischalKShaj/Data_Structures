// ============================> implementing queue using stack <=============================

class MyQueue {
  constructor() {
    this.stack = [];
  }
  push(x) {
    this.stack.push(x);
  }
  pop() {
    this.stack.shift();
  }
  peek() {
    return this.stack[0];
  }
  empty() {
    return this.stack.length === 0;
  }
}
const queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.pop();
console.log(queue.peek());
console.log(queue.empty());
