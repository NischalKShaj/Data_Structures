// =================> file to the prefix search in trie <=============== //

class Node {
  constructor() {
    this.end = false;
    this.children = new Map();
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
  prefixSearch(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.end || node.children.size >= 0;
  }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("mango");
trie.insert("grape");
trie.insert("ant");
trie.insert("any");
console.log(trie.prefixSearch("app"));
