// ============================> Implementing stack using queues <=====================

class MyStack {
  constructor() {
    this.q = [];
  }
  push(x) {
    this.q.push(x);
    for (let i = 0; i < this.q.length; i++) {
      this.q.push(this.q.shift());
    }
  }
  pop() {
    return this.q.shift();
  }
  top() {
    return this.q[0];
  }
  empty() {
    return this.q.length === 0;
  }
}
const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack.top());
console.log(stack.empty());