// ===================> file to implement a trie <=============== //

class Node {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new Node());
      }
      node = node.children.get(char);
    }
    node.end = true;
    node.children.set("*", new Node());
  }
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.end && node.children.has("*");
  }
  display() {
    let result = [];
    this.traverse(this.root, "", result);
    return result.join("\n");
  }
  traverse(node, currentWord, result) {
    if (node.end) {
      result.push(currentWord);
    }
    for (const [char, neighbour] of node.children) {
      this.traverse(neighbour, currentWord + char, result);
    }
  }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("mango");
trie.insert("grape");
trie.insert("ant");
trie.insert("any");
console.log(trie.display());
console.log(trie.search("apple"));