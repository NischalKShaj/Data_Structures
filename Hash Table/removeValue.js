// ==================> file to show the removal of a specific key from the hash table <=================================

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
  addValue(key, value) {
    const hash = this.hash(key);
    this.table[hash] = value;
  }
  removeValue(key) {
    const hash = this.hash(key);
    if (this.table[hash] !== undefined) {
      this.table[hash] = undefined;
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const hashTable = new HashTable(10);
hashTable.addValue("name", "Nischal");
hashTable.addValue("age", 21);
hashTable.addValue("height", 165);
hashTable.addValue("name", 40);
hashTable.display();
hashTable.removeValue("height");
hashTable.display();
