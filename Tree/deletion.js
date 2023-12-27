// ===================> deletion in a leaf node <============================

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
      console.log("Value not present in the tree");
      return null;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (root.right === null && root.left === null) {
        return null;
      } else {
        console.log("Value is not in the leaf");
      }
    }

    return root;
  }

  inorderTraversal(node, callback) {
    if (node !== null) {
      this.inorderTraversal(node.left, callback);
      callback(node.value);
      this.inorderTraversal(node.right, callback);
    }
  }
}
const binary = new Binary();
binary.insert(10);
binary.insert(5);
binary.insert(1);
binary.insert(3);
binary.insert(11);
let result = [];
binary.inorderTraversal(binary.root, (value) => {
  result.push(value);
});
console.log(result);
binary.delete(3);
result.length = 0;
binary.inorderTraversal(binary.root, (value) => {
  result.push(value);
});
console.log(result);
binary.delete(1)
result.length = 0;
binary.inorderTraversal(binary.root, (value) => {
  result.push(value);
});
console.log(result);