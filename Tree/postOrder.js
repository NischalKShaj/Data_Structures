// ===================> postorder traversal for binary search tree <=====================

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Binary {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNodeValue(this.root, node);
    }
  }
  insertNodeValue(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNodeValue(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNodeValue(root.right, node);
      }
    }
  }
  postOrder(node, callback) {
    if (node !== null) {
      this.postOrder(node.left, callback);
      this.postOrder(node.right, callback);
      callback(node.value);
    }
  }
}
const binary = new Binary();
binary.insert(10);
binary.insert(5);
binary.insert(1);
binary.insert(3);
binary.insert(11);
const result = [];
binary.postOrder(binary.root, (value) => {
  result.push(value);
});
console.log(result);
