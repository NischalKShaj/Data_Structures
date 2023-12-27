// ===================> file for showing deletion of nodes in tree <==========================

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
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      console.log("invalid value from the tree");
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      } else {
        root.value = this.minValue(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
    }
    return root;
  }
  minValue(root) {
    while (root !== null) {
      root = root.left;
    }
    return root.value;
  }
  preOrder(node, callback) {
    if (node !== null) {
      this.preOrder(node.left, callback);
      callback(node.value);
      this.preOrder(node.right, callback);
    }
  }
}
const binary = new Binary();
binary.insert(10);
binary.insert(5);
binary.insert(3);
binary.insert(1);
binary.insert(11);
const result = [];
binary.preOrder(binary.root, (value) => {
  result.push(value);
});
console.log(result);
binary.delete(5);
result.length = 0;
binary.preOrder(binary.root, (value) => {
  result.push(value);
});
console.log(result);
