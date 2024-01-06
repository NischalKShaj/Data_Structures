class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let current = this.root;
    if (value < current.value) {
      if (current.left === null) {
        current.left = node;
      } else {
        current = current.left;
      }
    } else {
      if (current.right === null) {
        current.right = node;
      } else {
        current = current.right;
      }
    }
  }
  isBST() {
    let prev = -Infinity;
    let valid = true;
    function checkBST(node) {
      if (node !== null && valid) {
        checkBST(node.left);
        if (node.value <= prev) {
          valid = false;
          return;
        }
        prev = node.value;
        checkBST(node.right);
      }
    }
    checkBST(this.root);
    return valid;
  }
}
const tree = new BTree();
tree.insert(8);
tree.insert(45);
tree.insert(6);
tree.insert(31);
tree.insert(9);
console.log(tree.isBST());

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(value);
  }
  heapifyUp() {
    let current = this.heap.length - 1;
    while (true) {
      const parent = Math.floor((current + 1) / 2);
      if (this.heap[current] > this.heap[parent]) {
        this.swap(current, parent);
        current = parent;
      } else {
        break;
      }
    }
  }
  swap(current, parent) {
    let temp = this.heap[parent];
    this.heap[parent] = this.heap[current];
    this.heap[current] = temp;
  }
}

const heap = new MaxHeap();
heap.insert(39);
heap.insert(23);
heap.insert(9);
heap.insert(3);
heap.insert(10);
heap.insert(20);
console.log(heap.heap);
