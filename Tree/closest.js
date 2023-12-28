// ==================> file to find the closeset value in the tree <=================== //

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
      return;
    }
    let current = this.root;
    while (true) {
      if (value <= current.value) {
        if (current.left === null) {
          current.left = node;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = node;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }
  closest(value) {
    let current = this.root;
    let close = current.value;
    while (current !== null) {
      if (Math.abs(value - close) > Math.abs(value - current.value)) {
        close = current.value;
      }
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        break;
      }
    }
    return close;
  }
}

const binary = new Binary();
binary.insert(10);
binary.insert(5);
binary.insert(3);
binary.insert(1);
binary.insert(11);
binary.insert(12);
console.log(binary.closest(6));
