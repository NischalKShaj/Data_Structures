// ==============================> file to show how to values in a hash table <=============================

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
  setValue(key, value) {
    const hash = this.hash(key);
    this.table[hash] = value;
  }
  dispalay() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const hash = new HashTable(50);
hash.setValue("name", "Nischal");
hash.setValue("age", 21);
hash.setValue("height", 165);
hash.setValue("weight", 40);

hash.dispalay();
