// ===================> preorder traversal in binary tree <========================

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
    if (node.value < node.value) {
      if (root.left === node) {
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
  preOrderTraversal(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.preOrderTraversal(node.left, callback);
      this.preOrderTraversal(node.right, callback);
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
binary.preOrderTraversal(binary.root, (value) => {
  result.push(value);
});
console.log(result);
