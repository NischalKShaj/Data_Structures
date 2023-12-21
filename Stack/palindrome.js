// ===============> checks whether the stack is palindrome <=======================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.arr = [];
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
    this.arr.push(node.value);
  }
  isPalindrome() {
    if (this.top === null) {
      console.log("stack underflow");
      return;
    }
    let current = this.top;
    let index = 0;
    while (current !== null) {
      if (this.arr[index] !== current.value) {
        console.log("not palindrome");
        return;
      }
      current = current.next;
      index++;
    }
    console.log("is palindrome");
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
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(4);
stack.push(5);
stack.display();
stack.isPalindrome();
