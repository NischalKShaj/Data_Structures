// ===========>  file to check whether a value is present in the trie <================= //

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
    for (let i = 0; i < suffix.length; i++) {
      let char = suffix[i];
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
    if (node.start === null) {
      node.start = index;
      node.end = this.text.length - 1;
    }
  }
  containsSuffix(suffix) {
    let node = this.root;
    for (let i = 0; i < suffix.length; i++) {
      let char = suffix[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.end !== null;
  }
}
const text = "banana";
const suffixTree = new SuffixTree(text);
const suffix = "anana";
console.log(suffixTree.containsSuffix(suffix));
console.log(suffixTree);
