// ===============> file to implement deletion in trie <================== //

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
  delete(word) {
    let node = this.root;
    let parent = null;
    let deletion = null;
    for (const char of word) {
      if (node.children.has(char)) {
        if (parent !== null && node.children.size === 1) {
          parent.children.delete(deletion);
          return;
        }
        parent = node;
        deletion = char;
        node = node.children.get(char);
      } else {
        return;
      }
      if (node.end) {
        node.end = false;
        if (node.children.size === 0 && parent !== null) {
          parent.children.delete(deletion);
        }
      }
    }
  }
  display(){
    const result = []
    this.traverse(this.root, "", result)
    return result.join("\n")
  }
  traverse(node, currentWord, result){
    if(node.end){
        result.push(currentWord)
    }
    for(const [char, childnode] of node.children){
        this.traverse(childnode, currentWord+char, result)
    }
  }
}
const trie = new Trie()
trie.insert("apple")
trie.insert("mango")
console.log(trie.display());
trie.delete("app")
console.log(trie.display());
