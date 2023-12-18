// ============> file shows how to handle the collion in the hash table <======================

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addValue(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  getValue(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }
  display() {
    let current = this.head;
    while (current) {
      console.log(current.key, current.value);
      current = current.next;
    }
  }
}
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
  insert(key, value) {
    const bucket = this.hash(key);
    if (!this.table[bucket]) {
      this.table[bucket] = new LinkedList();
    }
    this.table[bucket].addValue(key, value);
  }
  get(key) {
    const bucket = this.hash(key);
    if (this.table[bucket]) {
      return this.table[bucket].getValue(key);
    }
    return undefined;
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        this.table[i].display();
      }
    }
  }
}
const hashTable = new HashTable(10);
hashTable.insert("name", "Nischal");
hashTable.insert("age", 21);
hashTable.insert("height", 165);
hashTable.insert("weight", 40);
hashTable.display();
console.log("testing collision");
hashTable.insert("name", "Vishnu");
hashTable.display();
console.log(hashTable.get("name"));

