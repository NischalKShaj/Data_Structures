// =================> file to show the suffix tree <================== //

class Node {
  constructor() {
    this.children = {};
    this.start = null;
    this.end = null;
  }
}
class SuffixTree {
  constructor(text) {
    this.text = text;
    this.root = new Node();
    this.buildTree();
  }
  buildTree() {
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(this.text.substring(i), i);
    }
  }
  insertSuffix(suffix, index) {
    let node = this.root;
    for (let i = index; i < suffix.length; i++) {
      const char = suffix[i];
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
    if (node.start === null) {
      node.start = index;
      node.end = "*";
    }
  }
}
const text = "banana";
const suffixTree = new SuffixTree(text);
console.log(suffixTree);
