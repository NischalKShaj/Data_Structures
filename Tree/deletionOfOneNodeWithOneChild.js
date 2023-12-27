// ==================> file to show the deletion of node having one child node <===================

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
  deleteOne(value) {
    this.root = this.delete(this.root, value);
  }
  delete(root, value) {
    if (root === null) {
      console.log("value not found in the tree");
    }
    if (value < root.value) {
      root.left = this.delete(root.left, value);
    } else if (value > root.value) {
      root.right = this.delete(root.right, value);
    } else {
      if (root.left === null && root.right === null) {
        console.log("Node with no child found");
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      } else {
        console.log("contains more child nodes");
      }
    }
    return root;
  }
  inOrderTraverse(node, callback) {
    if (node !== null) {
      this.inOrderTraverse(node.left, callback);
      callback(node.value);
      this.inOrderTraverse(node.right, callback);
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
binary.inOrderTraverse(binary.root, (value) => {
  result.push(value);
});
console.log(result);
binary.deleteOne(1);
result.length = 0;
binary.inOrderTraverse(binary.root, (value) => {
  result.push(value);
});
console.log(result);
